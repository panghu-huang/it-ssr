const merge = require('webpack-merge');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const safePostCssParser = require('postcss-safe-parser');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const UglifyJsWebpackPlugin = require('uglifyjs-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const baseConfig = require('./config.client.dev');
const paths = require('./path.app');

module.exports = merge(baseConfig, {
  stats: 'verbose',
  mode: 'production',
  output: {
    chunkFilename: '[name].chunk.js',
  },
  resolve: {
    alias: {
      'it-ssr': 'it-ssr/lib/client.production.js',
    },
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
          MiniCssExtractPlugin.loader,
          require.resolve('css-loader'),
          require.resolve('sass-loader'),
        ],
      },
    ],
  },
  optimization: {
    nodeEnv: 'production',
    minimize: true,
    minimizer: [
      new OptimizeCSSAssetsPlugin({
        cssProcessorOptions: {
          parser: safePostCssParser,
        },
      })
    ],
    splitChunks: {
      chunks: 'all',
    },
  },
  plugins: [
    new MiniCssExtractPlugin(),
    new HtmlWebpackPlugin({
      template: paths.htmlTemplate,
      filename: 'client.html',
      templateParameters: {
        content: 'AppSlot',
        script: 'ScriptSlot',
      },
      minify: {
        removeComments: true,
        collapseWhitespace: true,
        removeRedundantAttributes: true,
        useShortDoctype: true,
        removeEmptyAttributes: true,
        removeStyleLinkTypeAttributes: true,
        keepClosingSlash: true,
        minifyJS: true,
        minifyCSS: true,
        minifyURLs: true,
      },
    }),
    new UglifyJsWebpackPlugin(),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production')
    }),
  ],
});