/**
 * Upload Component
 * Component to make uploading with clout easier
 * @author  Muhammad Dadu
 */

import { Component, OnInit, ViewEncapsulation } from 'angular2/core';

@Component({
	moduleId: module.id,
	selector: 'page-app',
	template: require('./app.component.html'),
	styles: [ require('./app.component.scss') ],
	encapsulation: ViewEncapsulation.Emulated
})
export class PageAppComponent implements OnInit {
	constructor() {

	}

	ngOnInit() {

	}
}