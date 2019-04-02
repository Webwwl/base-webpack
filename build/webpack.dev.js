const merge = require('webpack-merge')
const webpack = require('webpack')
let baseConfig  = require("./webpack.base")
const devConfig = merge(baseConfig, {
    mode: 'development',
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'sass-loader'
                ]
            }
        ]
    },
    devServer: {
        port: 3000,
        host: 'localhost'
    }
})
console.log(devConfig)
module.exports = devConfig