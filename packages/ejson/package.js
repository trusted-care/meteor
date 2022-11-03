Package.describe({
  summary: 'Extended and Extensible JSON library',
  version: '1.1.3-beta.0'
});

Package.onUse(function onUse(api) {
  api.use(['ecmascript', 'base64']);
  api.addAssets('ejson.d.ts', 'server');
  api.mainModule('ejson.js');
  api.export('EJSON');
});

Package.onTest(function onTest(api) {
  api.use(['ecmascript', 'tinytest', 'mongo']);
  api.use('ejson');
  api.mainModule('ejson_tests.js');
});
