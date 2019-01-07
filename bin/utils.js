const webpack = require('webpack');
const chalk = require('chalk');

function handleBuild(error, stats, onSuccess) {
  let errors = [], warnings = [];
  const messages = stats.toJson({
    all: false, errors: true, warnings: true,
  });
  
  if (messages.warnings.length) {
    warnings = warnings.concat(messages.warnings);
  }

  if (error || messages.errors.length) {
    if (error) {
      errors.push(error);
    }
    if (messages.errors.length) {
      errors = errors.concat(messages.errors);
    }
  } else {
    onSuccess && onSuccess();
  }

  console.log(chalk.yellow(warnings.join('\n')));
  console.log(chalk.red(errors.join('\n')));
}

function watch(config, onSuccess) {
  return new Promise(() => {
    webpack(config)
      .watch({ ignored: /node_modules/ }, (error, stats) => {
        handleBuild(error, stats, onSuccess)
      });
  });
}

function build(config, onSuccess) {
  return new Promise(() => {
    webpack(config).run((error, stats) => {
      handleBuild(error, stats, onSuccess);
    })
  });
}

exports.watch = watch;
exports.build = build;