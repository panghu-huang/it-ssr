const webpack = require('webpack');
const merge = require('webpack-merge');
const baseConfig = require('./config.server.dev');

module.exports = merge(baseConfig, {
  mode: 'production',
  optimization: {
    minimize: true,
    splitChunks: {
      chunks: 'all',
    },
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production')
    }),
  ],
});