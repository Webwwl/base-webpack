const path = require('path')

function resolvePath(filePath) {
  return path.join(__dirname, '..', filePath)
}

module.exports = { resolvePath }