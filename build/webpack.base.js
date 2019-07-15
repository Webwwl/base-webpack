const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");

let config = {
  output: {
    path: path.join(__dirname, "../dist"),
    filename: "[name].boundle.[hash].js",
    chunkFilename: "[name].async.[hash].js"
  },
  resolve: {
    alias: {
      "@": path.join(__dirname, "../src")
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
            query: {
              presets: ["@babel/preset-env"],
              plugins: [["@babel/syntax-dynamic-import"]],
            }
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
      template: path.join(__dirname, "../index.html")
    })
  ]
};

module.exports = config;
