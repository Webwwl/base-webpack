const path = require('path')
const webpack = require('webpack')
const { resolvePath } = require('./utils.js')

module.exports = {
  entry: {
    vendor: ['lodash', 'jquery']
  },
  mode: 'development',
  output: {
    path: resolvePath('dist'),
    filename: 'vendor/[name].[hash].js',
    library: 'vendor_[hash]'
  },
  plugins: [
    new  webpack.DllPlugin({
      name: 'vendor_[hash]',
      path: resolvePath('dist/vendor/manifest.json')
    })
  ]
}