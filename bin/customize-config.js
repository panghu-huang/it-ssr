const fs = require('fs');
const webpackMerge = require('webpack-merge');
const paths = require('../config/path.app');

function mergeCustomizeConfig(originalConfig, isServer, isDev) {
  const { customizeConfigPath } = paths;
  let finalWebpackConfig = originalConfig;
  if (fs.existsSync(customizeConfigPath)) {
    const customizeConfig = require(customizeConfigPath);

    let { webpack: customizeWebpackConfig } = customizeConfig;
    const type = typeof customizeWebpackConfig;
    if ('function' === type) {
      finalWebpackConfig = customizeWebpackConfig(originalConfig, isServer, isDev);
    } else if ('object' === type && customizeWebpackConfig !== null) {
      finalWebpackConfig = webpackMerge(originalConfig, customizeWebpackConfig);
    }
  } 
  return finalWebpackConfig;
}

module.exports = mergeCustomizeConfig;