const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
const UglifyJsWebpackPlugin = require('uglifyjs-webpack-plugin');
const paths = require('./path.lib');

module.exports = {
  mode: 'development',
  entry: paths.appClient,
  output: {
    path: paths.distDirectory,
    filename: 'client.development.js',
    libraryTarget: 'umd',
    library: 'client.development.js',
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
      },
    ],
  },
  plugins: [
    new ForkTsCheckerWebpackPlugin({
      tsconfig: paths.tsConfig,
      tslint: paths.tsLint,
    }),
    new UglifyJsWebpackPlugin()
  ],
};