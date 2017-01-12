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
			publicFolders.forEach((publicFolderConfiguration) => {
				let confType = Object.prototype.toString.call(publicFolderConfiguration);
				switch(confType) {
					case '[object Array]':
						let [dirPath, path] = publicFolderConfiguration;
						debug(`adding dir ${dirPath} as express.static @${path}`);
						this.app.use(`/${path}`, express.static(dirPath));
					break;
					default:
						let dir = publicFolderConfiguration;
						debug(`adding dir ${dir} as express.static`);
						this.app.use(express.static(dir));
					break;
				}
			});

			next();
		}
	}
};
