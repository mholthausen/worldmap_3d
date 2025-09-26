import express from 'express';
import cors from 'cors';
import pg from 'pg';
import dotenv from 'dotenv';
import rateLimit from 'express-rate-limit';
import helmet from 'helmet';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

dotenv.config({ path: join(__dirname, '.env') });

const app = express();
const port = process.env.PORT || 3001;

const { Pool } = pg;
const pool = new Pool({
  host: process.env.DB_HOST,
  port: parseInt(process.env.DB_PORT || '5432'),
  database: process.env.DB_NAME,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
});

app.use(helmet());
app.use(cors());
app.use(express.json({ limit: '10mb' }));

const generalLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 100,
  message: {
    error: 'Too many requests',
    message: 'Please try again later'
  },
  standardHeaders: true,
  legacyHeaders: false,
});

const featureLimiter = rateLimit({
  windowMs: 1 * 60 * 1000,
  max: 30,
  message: {
    error: 'Too many feature requests',
    message: 'Please slow down your requests'
  },
  standardHeaders: true,
  legacyHeaders: false,
});

app.use(generalLimiter);

app.use((req, res, next) => {
  const timestamp = new Date().toISOString();
  const ip = req.ip || req.connection.remoteAddress;
  console.log(`[${timestamp}] ${req.method} ${req.path} - IP: ${ip}`);
  next();
});

pool.connect((err, client, release) => {
  if (err) {
    console.warn('Warning: Could not connect to PostgreSQL database');
    console.warn('Database features will be unavailable');
    console.warn('Error details:', err.message);
    return;
  }
  console.log('Connected to PostgreSQL database successfully');
  release();
});

const validateFeatureId = (req, res, next) => {
  const { featureId } = req.params;

  if (!featureId) {
    return res.status(400).json({
      error: 'Feature ID is required',
      message: 'featureId parameter cannot be empty'
    });
  }

  const sanitized = featureId.trim();

  const validIdPattern = /^[0-9]+$/;
  if (!validIdPattern.test(sanitized)) {
    console.warn(`Invalid feature ID format attempted: ${featureId}`);
    return res.status(400).json({
      error: 'Invalid Feature ID format',
      message: 'Feature ID can only contain numbers'
    });
  }

  if (sanitized.length > 100) {
    console.warn(`Feature ID too long attempted: ${sanitized.length} characters`);
    return res.status(400).json({
      error: 'Feature ID too long',
      message: 'Feature ID must be 100 characters or less'
    });
  }

  req.params.featureId = sanitized;
  next();
};

app.get('/api/feature/:featureId', featureLimiter, validateFeatureId, async (req, res) => {
  const { featureId } = req.params;

  console.log(`Received request for feature_id: ${featureId}`);

  try {
    const testClient = await pool.connect();
    testClient.release();

    const query = 'SELECT objectid FROM feature WHERE id = $1';
    const result = await pool.query(query, [featureId]);

    if (result.rows.length === 0) {
      console.log(`No feature found with id: ${featureId}`);
      return res.status(404).json({
        error: 'Feature not found',
        feature_id: featureId
      });
    }

    const feature = result.rows[0];
    console.log(`Found feature:`, feature);

    res.json({
      success: true,
      feature_id: featureId,
      data: feature
    });

  } catch (error) {
    console.error('Database query error:', error);

    if (error.code === 'ECONNREFUSED' || error.code === 'ENOTFOUND') {
      return res.status(503).json({
        error: 'Database service unavailable',
        message: 'Could not connect to database',
        feature_id: featureId
      });
    }

    console.error('Full error details:', error);
    res.status(500).json({
      error: 'Internal server error',
      message: 'An error occurred while processing your request',
      feature_id: featureId
    });
  }
});

app.get('/api/health', async (req, res) => {
  let databaseStatus = 'Disconnected';

  try {
    const testClient = await pool.connect();
    testClient.release();
    databaseStatus = 'Connected';
  } catch (error) {
    console.warn('Database health check failed:', error.message);
  }

  res.json({
    status: 'OK',
    timestamp: new Date().toISOString(),
    database: databaseStatus
  });
});

app.use((error, req, res, next) => {
  console.error('Unhandled error:', error);
  res.status(500).json({
    error: 'Internal server error',
    message: 'Something went wrong'
  });
});

app.use('*', (req, res) => {
  res.status(404).json({
    error: 'Route not found',
    message: 'The requested endpoint does not exist'
  });
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
  console.log(`Health check: http://localhost:${port}/api/health`);
  console.log(`Feature API: http://localhost:${port}/api/feature/{featureId}`);
});

process.on('SIGINT', async () => {
  console.log('Shutting down server...');
  await pool.end();
  process.exit(0);
});
