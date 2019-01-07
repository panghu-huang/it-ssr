const path = require('path');

const appDirectory = process.cwd();

const resolveAppResource = absolutePath => path.join(appDirectory, absolutePath);

module.exports = {
  appEntry: resolveAppResource('src/index.tsx'),
  distDirectory: resolveAppResource('dist'),
  appSource: resolveAppResource('src'),
  publicDirectory: resolveAppResource('public'),
  htmlTemplate: resolveAppResource('src/index.ejs'),
  tsConfig: resolveAppResource('tsconfig.json'),
  tsLint: resolveAppResource('tslint.json'),
  customizeConfigPath: resolveAppResource('ssr.config.js'),
  appDirectory,
};