const path = require('path');

module.exports = {
  devtool: process.env.NODE_ENV === 'production' ? false : 'source-map',
  output: {
    chunkFilename: 'js/[name].js?id=[chunkhash]',
  },
  resolve: {
    alias: {
      vue$: path.resolve('vue/dist/vue.runtime.esm.js'),
      '@': path.resolve('./resources/js'),
      '~': path.resolve('./'),
    },
  },
};
