Package.describe({
  name: 'cleandersonlobo:material-refresh',
  version: '1.0.0',
  // Brief, one-line summary of the package.
  summary: 'Meteor Package - Google Material Design swipe(pull) to refresh by using JavaScript and CSS3. ',
  // URL to the Git repository containing the source code for this package.
  git: '',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.5');
  api.use('jquery');
  api.mainModule('material-refresh.js');
  api.addFiles([
    'material-refresh.min.css',
    'material-refresh.min.js'
  ], 'client');
});

Package.onTest(function(api) {
  api.use('ecmascript');
  api.use('tinytest');
  api.use('cleandersonlobo:material-refresh');
});
