/**
 * Webpack Default
 */
'use strict';

const Config = require('clout-js/lib/Config');
const _ = require('lodash');
const path = require('path');
const webpack = require('webpack');
const $ = require('webpack-load-plugins')();
const ConfigPlugin = require('webpack-config-plugin');
const autoprefixer = require('autoprefixer');

// ----------------------------------------------------------------------------

const manifest = require('../package.json');
let config = new Config();

config.loadFromDir(path.resolve(__dirname, '../backend/conf'));

// ----------------------------------------------------------------------------

module.exports = {
    devtool: 'inline-source-map',

    prerender: true,

    entry: {
        shared: './angular-typescript/shared.ts',
        home: './angular-typescript/home.ts',
        app: './angular-typescript/app.ts',
        vendors: [
            'angular',
            'jquery'
        ]
    },

    output: {
        path: '.angular-typescript/',
        publicPath: '/',
        filename: '[name].js'
    },

    resolve: {
        root: path.join(__dirname, '..'),
        extensions: [ '', '.ts', '.js', '.json' ]
    },

    resolveLoader: {
        modulesDirectories: [ 'node_modules' ]
    },

    module: {
        preLoaders: [
            {
                test: /\.json$/,
                loader: 'json'
            }
        ],
        loaders: [
            {
                test: /\.ts$/,
                loader: 'ts'
            },
            {
                test: /\.css$/,
                loader: $.extractText.extract('style', 'css')
            },
            {
                test: /\.scss$/,
                include: './angular-typescript/scss',
                loader: $.extractText.extract('style', 'css!sass')
            },
            { 
                test: /\.scss$/,
                exclude: './angular-typescript/scss',
                loader: 'raw!css!postcss!sass'
            },
            {
                test: /\.(ttf|eot|svg|woff2?)(\?v=[a-z0-9=\.]+)?$/i,
                loader: 'file?name=./assets/fonts/[name].[ext]'
            },
            {
                test: /\.html$/,
                loader: 'html'
            }
        ]
    },

    plugins: [
        new webpack.DefinePlugin({
            'NODE_ENV':  JSON.stringify(config.env),
            'manifest': JSON.stringify(manifest),
            'WEB3_CONF': JSON.stringify(config.web3)
        }),

        new ConfigPlugin({
            dir: 'angular-typescript/config',
            environment: config.env
        }),

        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery',
            'window.jQuery': 'jquery'
        }),

        new $.extractText('[name].css', {
            allChunks: false
        })
    ],

    postcss: [
        autoprefixer({
            browsers: [ 'last 2 versions' ]
        })
    ]
};
