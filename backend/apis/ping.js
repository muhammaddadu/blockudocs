/**
 * 
 */
module.exports = {
	ping: {
		path: '/v1/healthcheck',
		method: 'all',
		fn: function (req, resp, next) {
			let web3 = req.web3;
			let coinbase = web3.eth.coinbase;
			let balance = web3.eth.getBalance(coinbase);
			let TestModel = req.models.Test;

			resp.ok({
				web3: {
					eth: { coinbase, balance },
					isConnected: TestModel.isConnected() ? 'yes' : 'no'
				}
			});
		}
	}
};
