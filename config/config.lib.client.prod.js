const merge = require('webpack-merge');
const libConfig = require('./config.lib.client');
const paths = require('./path.lib');

module.exports = merge(libConfig, {
  mode: 'production',
  output: {
    path: paths.distDirectory,
    filename: 'client.production.js',
    libraryTarget: 'umd',
    library: 'client.production.js',
  },
})