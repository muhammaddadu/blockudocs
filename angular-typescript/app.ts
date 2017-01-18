/// <reference path="../node_modules/@types/node/index.d.ts" />
/// <reference path="../node_modules/angular2/typings/browser.d.ts" />
declare var WEB3_CONF: any;

import { bootstrap } from 'angular2/platform/browser';
import { PageAppComponent } from './pages/app/app.component.ts';
import '../node_modules/web3/index.js';

let Web3 = window['Web3'];
window['web3'] = new Web3();
window['web3']['setProvider'](new Web3.providers.HttpProvider(WEB3_CONF.provider.host));

bootstrap(PageAppComponent);
