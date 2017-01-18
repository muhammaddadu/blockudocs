/*!
 * clout-example-angluar2-ts-scss
 * Copyright(c) 2016 Muhammad Dadu
 * MIT Licensed
 */
let path = require('path');
const Web3 = require('web3');

module.exports = {
	session: {
		secret: '5476rutyfjgho78oiu'
	},
	publicFolders: [
		'.angular-typescript',
		['angular-typescript/scss/assets', 'assets']
	],
	web3: {
		provider: new Web3.providers.HttpProvider('http://localhost:8545'),
		etherbase: {
			address: '44252c1cbd74b0dcdb6a1a03e0d4eeae26802f76',
			password: 'T3st@2017'
		}
	}
};
