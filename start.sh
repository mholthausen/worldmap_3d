#!/bin/sh
# Startup script for combined frontend/backend container

echo "Starting Worldmap 3D services..."

# Start nginx in background
echo "Starting nginx..."
nginx

# Check if nginx started successfully
if [ $? -eq 0 ]; then
    echo "Nginx started successfully"
else
    echo "Failed to start nginx"
    exit 1
fi

# Wait a moment for nginx to fully start
sleep 2

# Start node server in foreground
echo "Starting Node.js backend server..."
cd /app/server

export DB_HOST=${DB_HOST}
export DB_PORT=${DB_PORT}
export DB_NAME=${DB_NAME}
export DB_USER=${DB_USER}
export DB_PASSWORD=${DB_PASSWORD}
export PORT=${PORT}

# Debug: Print database configuration (without password)
echo "Database configuration:"
echo "  DB_HOST: $DB_HOST"
echo "  DB_PORT: $DB_PORT"
echo "  DB_NAME: $DB_NAME"
echo "  DB_USER: $DB_USER"

exec node server.js