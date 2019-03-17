const config = require('./tsconfig.json')

exports.scripts = function* (task, opts) {
  yield task.source('scripts/**.ts')
    .typescript(config)
    .target('lib/scripts')
}

exports.default = function* (task) {
  yield task.start('scripts')
}