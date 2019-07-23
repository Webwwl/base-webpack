const merge = require('webpack-merge')
const webpack = require('webpack')
let baseConfig  = require("./webpack.base")
const glob = require('glob')
const path = require('path')
const HtmlWebpackPlugin = require("html-webpack-plugin");
const AddAssetHtmlPlugin = require('add-asset-html-webpack-plugin');

const { resolvePath } = require('./utils')
// 动态html && entry
function setEntryAndHtml() {
    const entryFiles = glob.sync(path.join(__dirname, '../src/*/index.js'))
    console.log("TCL: setEntryAndHtml -> entryFiles", entryFiles)
    const entry = {}, htmlPlugins = []
    entryFiles.map((entryPath) => {
        let entryName = entryPath.match(/src\/(.*)\/index\.js$/)
        entryName = entryName && entryName[1]
        entry[entryName] = entryPath
        htmlPlugins.push( new HtmlWebpackPlugin({
            template: path.join(__dirname, `../index.html`),
            chunks: [entryName,],
            filename: `${entryName}.html`
        }))
    })
    return {
        entry,
        htmlPlugins
    }
}
let { entry, htmlPlugins } = setEntryAndHtml()

const devConfig = merge(baseConfig, {
    entry,
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
    // devtool: 'source-map',
    devServer: {
        port: 8088,
        host: 'localhost',
        contentBase: resolvePath('dist')
    },
    plugins: [
        ...htmlPlugins,
        new AddAssetHtmlPlugin({
            filepath: resolvePath('dist/vendor/vendor.*.js')
        })
    ]
})
console.log(devConfig)

// let compiler = webpack(devConfig)
// compiler.run()


module.exports = devConfig