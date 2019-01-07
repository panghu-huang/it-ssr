const clientConfig = require('../config/config.client.prod');
const serverConfig = require('../config/config.server.prod');
const mergeCustomizeConfig = require('./customize-config');
const { build } = require('./utils');

process.env.BABEL_ENV = 'production';
process.env.NODE_ENV = 'production';

build(mergeCustomizeConfig(serverConfig, true, false), () => {
  build(mergeCustomizeConfig(clientConfig, false, false));
});