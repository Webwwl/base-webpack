const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');


function resolvePath(p) {
  return path.resolve(__dirname, p)
}

const config = {
  entry: {
    report: './src/index.js'
  },
  output: {
    path: resolvePath('dist'),
    filename: '[name].[hash:8].boundle.js',
    library: 'CIL_Reporter',
    libraryTarget: 'umd',
    globalObject: 'this',
    umdNamedDefine: true
  },
  mode: process.env.NODE_ENV,
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.js$/,
        use: ['babel-loader']
      }
    ]
  },
  devServer: {
    contentBase: resolvePath('dist'),
    port: 9999,
    host: 'localhost',
    proxy: {
      '/scanpay': {
        target: 'http://test.quick.ipay.so/'
      }
    }
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: 'index.html',
      inject: 'head'
    })
  ]
}

module.exports = config