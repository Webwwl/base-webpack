const merge = require('webpack-merge')
const webpack = require('webpack')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
let baseConfig = require("./webpack.base")

let buildConfig = merge(baseConfig, {
    mode: 'production',
    module: {
        rules: [
            {
                test: /\.(sa|c|sc)ss$/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader
                        // options: {
                        //     publicPath: '../'
                        // }
                    },
                    'css-loader',
                    'sass-loader'
                ]
            }
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: 'style/[name].[hash].css',
            chunkFilename: 'style/[id].css'
        })
    ]
})
console.log("ucnf", buildConfig);
module.exports = buildConfig