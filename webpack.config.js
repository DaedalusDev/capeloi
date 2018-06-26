const path = require('path');

module.exports = {
  context: path.resolve(__dirname, './front'),
    resolve: {
    alias: {
      "@": path.resolve(__dirname, './front/src')
    }
  }
};
