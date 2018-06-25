const path = require('path');

module.exports = {
  context: path.resolve(__dirname, './assets'),
    resolve: {
    alias: {
      "@": path.resolve(__dirname, './assets/src')
    }
  }
};
