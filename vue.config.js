const path = require('path')

const PUBLIC_DIR = path.resolve(__dirname, 'assets/public')
const SRC_DIR = path.resolve(__dirname, 'assets/src')
const MAIN_FILE = 'main.js'
const BUILD_DIR = path.resolve(__dirname, 'public/build')

module.exports = {
  baseUrl: '/build/',
  outputDir: 'public/build',
  lintOnSave: true,
  chainWebpack: config => {
    config.mode('development')
    // Change Context
    config.context(path.resolve(__dirname, 'assets'))

    // Define entrypoint
    config.entry('app')
      .clear()
      .add(path.resolve(SRC_DIR, MAIN_FILE))

    // Change ouput path
    // config.output
    //   .path(BUILD_DIR)
    //   .filename('[name].js')
    // Modify alias root
    config.resolve.alias
      .set('@', SRC_DIR)
    // Modify plugins
    // HTML
    config.plugin('html')
      .tap(args => {
        return [{
          ...args[0],
          template: path.resolve(PUBLIC_DIR, 'index.html')
        }]
      })
    // COPY
    config.plugin('copy')
      .tap(args => {
        args[0][0].from = PUBLIC_DIR
        args[0][0].to = BUILD_DIR
        return args
      })
  },
  devServer: {
    proxy: {
      '/api': {
        target: process.env.DEV_API_URL,
        ws: true,
        changeOrigin: true
      }
    }
  }
}
