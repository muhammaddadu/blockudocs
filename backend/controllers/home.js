/*!
 * blockudocs
 * Copyright(c) 2016 Muhammad Dadu
 * MIT Licensed
 */
'use strict';
function component(opts, fn) {
	opts.fn = fn;
	return opts;
}
 
module.exports = Component({
	path: '/',
	description: 'Example application using Angular2, Typescript & SCSS'
}, function (req, resp) {
	resp.render('home');
});
