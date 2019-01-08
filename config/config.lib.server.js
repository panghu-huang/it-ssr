const nodeExternals = require('webpack-node-externals');
const paths = require('./path.lib');

module.exports = {
  mode: 'development',
  entry: paths.appServer,
  target: 'node',
  output: {
    path: paths.distDirectory,
    filename: 'server.development.js',
    libraryTarget: 'commonjs2',
    library: 'server.development.js',
  },
  resolve: {
    alias: {
      src: paths.appSource,
      'it-ssr': 'it-ssr/lib/server.development.js',
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