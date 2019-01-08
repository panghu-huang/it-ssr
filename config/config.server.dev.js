const webpack = require('webpack');
const nodeExternals = require('webpack-node-externals');
const paths = require('./path.app');

module.exports = {
  mode: 'development',
  target: 'node',
  entry: paths.appEntry,
  output: {
    path: paths.distDirectory,
    filename: 'server.js',
    libraryTarget: 'commonjs2',
    library: 'server.js',
  },
  resolve: {
    alias: {
      src: paths.appSource,
      'it-ssr': 'it-ssr/lib/server.js',
    },
    extensions: [
      '.js', '.jsx', '.ts', '.tsx', '.scss',
    ],
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: require.resolve('ts-loader'),
        include: paths.appSource,
        exclude: /node_modules/,
        options: {
          transpileOnly: true,
        },
      },
      {
        test: /\.scss$/,
        include: paths.appSource,
        exclude: /node_modules/,
        use: [
          require.resolve('isomorphic-style-loader'),
          require.resolve('css-loader'),
          require.resolve('sass-loader'),
        ],
      }
    ],
  },
  externals: [
    nodeExternals()
  ],
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('development')
    })
  ],
};