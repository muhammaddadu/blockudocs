/*!
 * clout-public-folders
 * Copyright(c) 2015 - 2016 Muhammad Dadu
 * MIT Licensed
 */
const
	debug = require('debug')('clout-public-folders:hooks/clout-public-folders'),
	express = require('express'),
	path = require('path');

module.exports = {
	parse: {
		event: 'start',
		priority: 'MIDDLEWARE',
		fn: function (next) {
			let publicFolders = this.config.publicFolders || [];
			for (let i = 0, l = publicFolders.length; i < l; ++i) {
				let dir = publicFolders[i];
				debug(`adding dir ${dir} as express.static`);
				this.app.use(express.static(dir));
			}

			next();
		}
	}
};
