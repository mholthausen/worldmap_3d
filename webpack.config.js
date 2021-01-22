const path = require('path');

const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopywebpackPlugin = require('copy-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');

const cesiumSource = 'node_modules/cesium';

(module.exports = {
  context: __dirname,
  entry: {
    app: './src/index.js'
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist'),
    sourcePrefix: ''
  },
  node: {
    // Resolve node module use of fs
    global: false,
    __filename: false,
    __dirname: false
  },
  resolve: {
    mainFields: ['module', 'main']
  },
  module: {
    // unknownContextCritical: false,
    rules: [
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
    new CopywebpackPlugin({
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
        }
      ]
    }),
    new webpack.DefinePlugin({
      CESIUM_BASE_URL: JSON.stringify('')
    }),
    new TerserPlugin({
      terserOptions: {
        ecma: undefined,
        warnings: false,
        parse: {},
        compress: {},
        mangle: true, // Note `mangle.properties` is `false` by default.
        module: false,
        output: null,
        toplevel: false,
        nameCache: null,
        ie8: false,
        keep_classnames: undefined,
        keep_fnames: false,
        safari10: false
      }
    })
  ],
  devServer: {
    contentBase: path.join(__dirname, 'dist')
  },
  resolve: {
    alias: {
      cesium: path.resolve(__dirname, cesiumSource)
    }
  }
}),
  (module.rules = {
    rules: [
      {
        // Strip cesium pragmas
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
      }
    ]
  });
