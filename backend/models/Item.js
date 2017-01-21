const clout = require('clout-js');
const SolidityContract = require('./solidity/Item.sol');
const web3 = clout.module.web3;
// const CompiledContract = web3.eth.compile.solidity(SolidityContract);
// const contract = web3.eth.contract(CompiledContract);

// console.log(contract);

module.exports = class Item {

	constructor() {

	}

	static contractExistsInBlockchain() {

	}
};
