Package.describe({
  name: 'usulix:geolocation',
  summary: 'Provides configurable reactive geolocation on desktop and mobile.',
  version: '1.0.0',
  git: 'https://github.com/usulix/meteor-package-geolocation.git'
});

Cordova.depends({
  "org.apache.cordova.geolocation": "0.3.10"
});

Package.on_use(function (api) {
  api.use(["reactive-var"]);
  api.versionsFrom("METEOR@0.9.2");
  api.add_files(["geolocation.js"], "client");
  api.export("Geolocation", "client");
});
