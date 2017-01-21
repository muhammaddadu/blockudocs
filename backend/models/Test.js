/**
 * 
 */
var clout = require('clout-js');
var web3 = clout.module.web3;

class Test {


  constructor() {

  }

  static findById() {
    return new Test();
  }

  static query() {

  }

  static isConnected() {
    return web3.isConnected();
  }

}

module.exports = Test;
