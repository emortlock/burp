const path = require('path')
const mime = require('mime-types')

const rootFiles = [
  { dir: 'static', fileName: 'robots.txt' },
  { dir: '.next', fileName: 'service-worker.js' },
]

module.exports = rootFiles.map(({ fileName, dir }) => ({
  file: fileName,
  options: {
    root: path.resolve(__dirname, '../../../', dir),
    headers: {
      'Content-Type': `${mime.lookup(fileName)}`,
    },
  },
}))
