const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
const paths = require('./path.app');

module.exports = {
  mode: 'development',
  entry: paths.appEntry,
  output: {
    path: paths.publicDirectory,
    filename: 'app.js',
  },
  resolve: {
    alias: {
      src: paths.appSource,
      'it-ssr': 'it-ssr/lib/client.development.js',
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
          require.resolve('style-loader'),
          require.resolve('css-loader'),
          require.resolve('sass-loader'),
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: paths.htmlTemplate,
      filename: 'client.html',
      templateParameters: {
        content: null,
        script: null,
      },
    }),
    new ForkTsCheckerWebpackPlugin({
      tsconfig: paths.tsConfig,
      tslint: paths.tsLint,
    }),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('development')
    }),
  ],
};