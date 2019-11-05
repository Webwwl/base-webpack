const merge = require('webpack-merge')
const webpack = require('webpack')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const baseConfig = require("./webpack.base")
const glob = require('glob')
const path = require('path')
const HtmlWebpackPlugin = require("html-webpack-plugin");
const AddAssetHtmlPlugin = require('add-asset-html-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin
const FileListPlugin = require('../plugins/FileListPlugin')

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
            chunks: [entryName, 'common', 'game'],
            filename: `${entryName}.html`
        }))
    })
    return {
        entry,
        htmlPlugins
    }
}

let { entry, htmlPlugins } = setEntryAndHtml()

const buildConfig = merge(baseConfig, {
    entry,
    mode: 'none',
    // mode: 'production',
    output: {
        publicPath: './',
        filename: `[name].[hash].js`
    },
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
            },
            {
                test: /\.less$/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader
                        // options: {
                        //     publicPath: '../'
                        // }
                    },
                    'css-loader',
                    'less-loader'
                ]
            }
        ]
    },
    plugins: [
        new webpack.ProgressPlugin(),
        new MiniCssExtractPlugin({
            filename: 'style/[name].[hash].css',
            chunkFilename: 'style/[id].css'
        }),
        new CleanWebpackPlugin({
            cleanOnceBeforeBuildPatterns: ['**/*', '!vendor/**']
        }),
        new webpack.optimize.ModuleConcatenationPlugin(),
        // new BundleAnalyzerPlugin(),
        new FileListPlugin({
            filename: 'fileList.md'
        })
    ].concat([...htmlPlugins,
        new AddAssetHtmlPlugin({
            filepath: resolvePath('dist/vendor/vendor.*.js')
        })
    ])
})
module.exports = buildConfig
