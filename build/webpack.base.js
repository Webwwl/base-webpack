const path = require("path");
const webpack = require("webpack");
const Clean = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

let config = {
  entry: {
    app: path.join(__dirname, "../src/main.js")
  },
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
              plugins: ["@babel/syntax-dynamic-import"]
            }
          }
        ]
      },
      {
        test: /\.(png)|(jpe?g)|(svg)/,
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
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, "../index.html")
    }),
    new Clean()
  ]
};

module.exports = config;
