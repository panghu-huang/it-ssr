const path = require('path');
const { fork } = require('child_process');
const serverConfig = require('../config/config.server.prod');

const serverBundlePath = path.join(
  serverConfig.output.path, serverConfig.output.filename
);

fork(serverBundlePath, {}, { stdio: "inherit" })