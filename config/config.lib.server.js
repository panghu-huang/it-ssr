const nodeExternals = require('webpack-node-externals');
const paths = require('./path.lib');

module.exports = {
  mode: 'production',
  entry: paths.appServer,
  target: 'node',
  output: {
    path: paths.distDirectory,
    filename: 'server.js',
    libraryTarget: 'commonjs2',
    library: 'server.js',
  },
  resolve: {
    alias: {
      src: paths.appSource,
    },
    extensions: [
      '.js', '.jsx', '.ts', '.tsx', '.scss',
    ],
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: 'ts-loader',
        include: paths.appSource,
        options: {
          transpileOnly: true,
        },
      }
    ],
  },
  externals: [
    nodeExternals()
  ],
};