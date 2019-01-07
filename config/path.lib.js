const path = require('path');

const resolveResource = absolutePath => path.resolve(__dirname, `../${absolutePath}`);

module.exports = {
  resolveResource,
  appSource: resolveResource('src'),
  appClient: resolveResource('src/client/index.tsx'),
  appServer: resolveResource('src/server/index.tsx'),
  htmlTemplate: resolveResource('src/index.ejs'),
  distDirectory: resolveResource('lib'),
  publicDirectory: resolveResource('public'),
  tsConfig: resolveResource('tsconfig.json'),
  tsLint: resolveResource('tslint.json'),
};