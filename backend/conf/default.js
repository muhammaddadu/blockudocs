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
		provider: new Web3.providers.HttpProvider('http://blockchain-rpc.clout.tech'),
		etherbase: {
			address: '2786e2c227531a221fa350b3ed4847effa97f6ae',
			password: 'T3st@2017'
		}
	}
};
