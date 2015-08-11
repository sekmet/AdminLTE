// package metadata file for Meteor.js
var packageName = 'yp2:admin-lte';
var where = 'client'; // where to install: 'client' or 'server'. For both, pass nothing.
var version = '2.2.1_11';
var summary = 'Admin-Lte meteor package';
var gitLink = 'https://github.com/yp2/AdminLTE';
var documentationFile = 'README.md';

// Meta-data
Package.describe({
  name: packageName,
  version: version,
  summary: summary,
  git: gitLink,
  documentation: documentationFile
});

Package.onUse(function(api) {
  api.versionsFrom(['METEOR@0.9.0', 'METEOR@1.0']); // Meteor versions

  api.use('jquery', where); // Dependencies
  api.use('twbs:bootstrap@3.3.5', where); // Dependencies
  api.use('fortawesome:fontawesome@4.4.0', where); // Dependencies


  api.addFiles('index2.html', where);

  api.addFiles('dist/css/AdminLTE.css', where);
  api.addFiles('dist/css/skins/_all-skins.css', where);

  api.addFiles('dist/img/avatar.png', where);
  api.addFiles('dist/img/avatar2.png', where);
  api.addFiles('dist/img/avatar3.png', where);
  api.addFiles('dist/img/avatar04.png', where);
  api.addFiles('dist/img/avatar5.png', where);
  api.addFiles('dist/img/boxed-bg.jpg', where);
  api.addFiles('dist/img/boxed-bg.png', where);
  api.addFiles('dist/img/default-50x50.gif', where);
  api.addFiles('dist/img/icons.png', where);
  api.addFiles('dist/img/photo1.png', where);
  api.addFiles('dist/img/photo2.png', where);
  api.addFiles('dist/img/user1-128x128.jpg', where);
  api.addFiles('dist/img/user2-160x160.jpg', where);
  api.addFiles('dist/img/user3-128x128.jpg', where);
  api.addFiles('dist/img/user4-128x128.jpg', where);
  api.addFiles('dist/img/user5-128x128.jpg', where);
  api.addFiles('dist/img/user6-128x128.jpg', where);
  api.addFiles('dist/img/user7-128x128.jpg', where);
  api.addFiles('dist/img/user8-128x128.jpg', where);

  //api.addFiles('dist/css/skins/skin-black.css', where);
  //api.addFiles('dist/css/skins/skin-blue.css', where);
  //api.addFiles('dist/css/skins/skin-green.css', where);
  //api.addFiles('dist/css/skins/skin-purple.css', where);
  //api.addFiles('dist/css/skins/skin-red.css', where);
  //api.addFiles('dist/css/skins/skin-yellow.css', where);

  api.addFiles('dist/js/app.js', where);
  api.addFiles('build/less/AdminLTE.less', where);

  
});   
