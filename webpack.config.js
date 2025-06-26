import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

import webpack from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import CopyWebpackPlugin from 'copy-webpack-plugin';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const cesiumSource = 'node_modules/cesium';

export default {
  context: __dirname,
  entry: {
    app: './src/index.js'
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist'),
    sourcePrefix: ''
  },
  resolve: {
    fallback: {
      zlib: false,
      https: false,
      http: false,
      assert: false,
      util: false,
      url: false
    },
    mainFields: ['module', 'main'],
    alias: {
      cesium: path.resolve(__dirname, cesiumSource)
    }
  },
  module: {
    rules: [
      // Strip cesium pragmas
      {
        test: /\.js$/,
        enforce: 'pre',
        include: path.resolve(__dirname, cesiumSource),
        use: [
          {
            loader: 'strip-pragma-loader',
            options: {
              pragmas: {
                debug: false
              }
            }
          }
        ]
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.less$/,
        use: [
          'style-loader',
          'css-loader',
          {
            loader: 'less-loader',
            options: {
              javascriptEnabled: true
            }
          }
        ]
      },
      {
        test: /\.(png|gif|jpg|jpeg|svg|xml|json)$/,
        use: ['url-loader']
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: 'html-loader'
          }
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'src/index.html'
    }),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: path.join(cesiumSource, 'Build/Cesium/Workers'),
          to: 'Workers'
        },
        {
          from: path.join(cesiumSource, 'Build/Cesium/ThirdParty'),
          to: 'ThirdParty'
        },
        {
          from: path.join(cesiumSource, 'Build/Cesium/Assets'),
          to: 'Assets'
        },
        {
          from: path.join(cesiumSource, 'Build/Cesium/Widgets'),
          to: 'Widgets'
        },
        {
          from: 'src/img',
          to: 'img/'
        },
        {
          from: 'src/data',
          to: 'data/'
        }
      ]
    }),
    new webpack.DefinePlugin({
      CESIUM_BASE_URL: JSON.stringify('')
    })
  ],
  devServer: {
    static: path.join(__dirname, 'dist'),
    host: '0.0.0.0',
    port: 3000,
    hot: true
  },
  mode: 'development'
};
