const path = require('path')

module.exports = {
  outputDir: './dist/docs/',
  chainWebpack: config => {
    config
      .entry('app')
      .clear()
      .add('./docs/main.js')
      .end()
    config.resolve.alias
      .set('@', path.join(__dirname, './docs'))
  }
}
