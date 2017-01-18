/// <reference path="../node_modules/@types/node/index.d.ts" />
/// <reference path="../node_modules/angular2/typings/browser.d.ts" />

import { bootstrap } from 'angular2/platform/browser';
import { PageAppComponent } from './pages/app/app.component.ts';
import web3 from '../node_modules/web3/dist/web3.js';

console.log(web3);

bootstrap(PageAppComponent);
