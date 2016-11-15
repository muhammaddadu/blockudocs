/*!
 * clout-example-angluar2-ts-scss
 * Copyright(c) 2016 Muhammad Dadu
 * MIT Licensed
 */
const clout = require('clout-js');

function Component(opts, handler) {
	opts.fn = handler;
	return opts;
}
global.Component = Component;

clout.start(); // start application

/**
 * Listen for server starting
 * display appropiate information
 */
clout.on('started', function () {
	if (clout.server.https) {
		clout.logger.info('https server started on port %s', clout.server.https.address().port);
	}
	if (clout.server.http) {
		clout.logger.info('http server started on port %s', clout.server.http.address().port);
	}
});
