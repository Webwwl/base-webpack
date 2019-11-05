const webpack = require("webpack");
// const HtmlWebpackPlugin = require("html-webpack-plugin");

const { resolvePath } = require('./utils')

let config = {
  output: {
    path: resolvePath("dist"),
    filename: "[name].boundle.[hash].js",
    chunkFilename: "[name].async.[hash].js"
  },
  resolve: {
    alias: {
      "@": resolvePath("src")
    }
  },
  optimization: {
    splitChunks: {
      minSize: 1,
      cacheGroups: {
        // vendor: {
        //   test: resolvePath('/node_modules/'),
        //   chunks: 'all',
        //   minChunks: 2
        // },
        common: {
          chunks: "all",
          minChunks: 3,
          name: "common"
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
          'eslint-loader',
          'babel-loader',
        ]
      },
      {
        test: /\.(png|jpe?g|svg)$/,
        use: [
          {
            loader: "url-loader",
            options: {
              limit: 10000,
              name: "[name].[ext]",
              outputPath: "images/",
              publicPath: "../images/"
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
              publicPath: "../fonts",
              name: "[name].[ext]",
              outputPath: "fonts/"
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new webpack.ProvidePlugin({
      $: "jquery",
      jquery: "jquery"
    }),
    new webpack.DllReferencePlugin({
      manifest: resolvePath("dist/vendor/manifest.json")
    })
  ]
};

module.exports = config;
