const configureWebpack = require('./webpack.config.js')
const devServer =
module.exports = {
  outputDir: './public/build',
  lintOnSave: true,
  // webpack
  configureWebpack,
  devServer: {
    ...(process.env.DEV_API_URL
      ? {
        proxy: {
          '/api': {
            target: process.env.DEV_API_URL,
            ws: true,
            changeOrigin: true
          }
        }
      }
      : null)
  }
}
