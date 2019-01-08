const path = require('path');
const { fork } = require('child_process');
const chalk = require('chalk');
const { watch } = require('./utils');
const clientConfig = require('../config/config.client.dev');
const serverConfig = require('../config/config.server.dev');
const mergeCustomizeConfig = require('./customize-config');

process.env.BABEL_ENV = 'development';
process.env.NODE_ENV = 'development';

let subProcess;

const serverBundlePath = path.join(
  serverConfig.output.path, serverConfig.output.filename
);

watch(mergeCustomizeConfig(clientConfig, false, true));
watch(mergeCustomizeConfig(serverConfig, true, true), () => {
  if (subProcess) {
    subProcess.kill();
  }
  process.nextTick(() => {
    console.clear();
    console.log(chalk.green('正在重启服务...'));
    subProcess = fork(serverBundlePath, {}, { stdio: "inherit" });
  });
});