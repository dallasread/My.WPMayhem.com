/* global require, module */

var EmberApp = require('ember-cli/lib/broccoli/ember-app');

var app = new EmberApp();
app.import('vendor/bootstrap.min.js');
module.exports = app.toTree();
