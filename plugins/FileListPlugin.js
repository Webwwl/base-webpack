const fs = require('fs')
const path = require('path')
class FileListPlugin {
  constructor({filename}) {
    this.filename = filename
  }
  apply(compiler) {
    compiler.hooks.emit.tap('FileListPlugin', (compilation) => {
      let assets = compilation.assets
      console.log("TCL: apply -> assets", assets)
      let content = 'file list: \n'
      Object.keys(assets).forEach(filename => {
        content += filename + '\n'
      })
      assets[this.filename] = {
        source() {
          return content
        },
        size() {
          return content.length
        }
      }
    })
  }
}

module.exports = FileListPlugin
