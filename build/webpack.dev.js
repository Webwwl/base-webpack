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
            },
            {
                test: /\.less$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'less-loader'
                ]
            }
        ]
    },
    devServer: {
        port: 8088,
        host: 'localhost'
    }
})
console.log(devConfig)

// let compiler = webpack(devConfig)
// compiler.run()


module.exports = devConfig