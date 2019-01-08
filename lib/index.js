const isDev = 'development' === process.env.NODE_ENV;
if ('undefined' === typeof window) {
  if (isDev) {
    module.exports = require('./server.development');
  } else {
    module.exports = require('./server.production');
  }
} else {
  if (isDev) {
    module.exports = require('./client.development');
  } else {
    module.exports = require('./client.production');
  }
}