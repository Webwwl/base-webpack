const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");

function resolve(filePath) {
  return path.join(__dirname, '..', filePath)
}

let config = {
  output: {
    path: resolve('dist'),
    filename: "[name].boundle.[hash].js",
    chunkFilename: "[name].async.[hash].js"
  },
  resolve: {
    alias: {
      "@": resolve('src')
    }
  },
  optimization: {
    splitChunks: {
      minSize: 1,
      cacheGroups: {
        // vendor: {
        //   test: resolve('/node_modules/'),
        //   chunks: 'all',
        //   minChunks: 2
        // },
        common: {
          chunks: 'all',
          minChunks: 3,
          name: 'common'
        }
      }
    }
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [
          {
            loader: "babel-loader",
          }
        ]
      },
      {
        test: /\.(png|jpe?g|svg)$/,
        use: [
          {
            loader: "url-loader",
            options: {
              limit: 10000,
              name: '[name].[ext]',
              outputPath: 'images/',
              publicPath: '../images/'
            }
          }
        ]
      },
      {
        test: /\.(woff|ttf)$/,
        use: [
          {
            loader: "url-loader",
            options: {
              limit: 500,
              publicPath: '../fonts',
              name: '[name].[ext]',
              outputPath: 'fonts/',
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: resolve('index.html')
    }),
    new webpack.ProvidePlugin({
      '$': 'jquery',
      'jquery': 'jquery'
    })
  ]
};

module.exports = config;
