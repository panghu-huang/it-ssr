const merge = require('webpack-merge');
const libConfig = require('./config.lib.server');
const paths = require('./path.lib');

module.exports = merge(libConfig, {
  mode: 'production',
  resolve: {
    alias: {
      'it-ssr': 'it-ssr/lib/server.production.js',
    },
  },
  output: {
    path: paths.distDirectory,
    filename: 'server.production.js',
    libraryTarget: 'commonjs2',
    library: 'server.production.js',
  },
})