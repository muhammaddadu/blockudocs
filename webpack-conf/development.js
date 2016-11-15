/**
 * Webpack Development
 */
'use strict';

const merge = require('webpack-merge');
const webpack = require('webpack');

const defaultConf = require('./default');

module.exports = merge(defaultConf, {
    devtool: 'eval-source-map',
    cache: true,
    plugins: [
        new webpack.optimize.CommonsChunkPlugin('vendors', 'vendors.js', Infinity),
        new webpack.HotModuleReplacementPlugin()
    ]
});
