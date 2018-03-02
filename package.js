Package.describe({
	name: 'djk:clockpicker',
	version: '1.0.0',
	summary: "Clockpicker (v0.0.6), packaged for Meteor.js.",
	git: 'https://github.com/djkmiles/meteor-clockpicker.git',
	documentation: 'Readme.md'
});

Package.on_use(function (api) {
    api.use('ui', 'client');
    api.addFiles(['lib/js/clockpicker.js', 'lib/css/clockpicker.css'], 'client');
});
