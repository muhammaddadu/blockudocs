/**
 * Upload Component
 * Component to make uploading with clout easier
 * @author  Muhammad Dadu
 */

declare var web3 : any;

import { Component, OnInit, ViewEncapsulation } from 'angular2/core';

@Component({
	moduleId: module.id,
	selector: 'page-app',
	template: require('./app.component.html'),
	styles: [ require('./app.component.scss') ],
	encapsulation: ViewEncapsulation.Emulated
})
export class PageAppComponent implements OnInit {
	from: any;
	filter: any;

	constructor() {

	}

	ngOnInit() {
		this.from = web3.eth.coinbase;
		web3.eth.defaultAccount = this.from;
        this.filter = web3.eth.namereg.Changed();
        this.filter.watch((err, event) => {
            this.onAddressKeyUp();
            this.onNameKeyUp();
            this.onRegisterOwnerKeyUp();
        });
	}

    registerOwner() {
        var name = document.getElementById('registerOwner')['value'];
        web3.eth.namereg.reserve(name);
        document.getElementById('nameAvailability').innerText += ' Registering name in progress, please wait...';
    };
    
    changeAddress() {
        var name = document.getElementById('registerOwner')['value'];
        var address = document.getElementById('newAddress')['value'];
        web3.eth.namereg.setAddress(name, address, true);
        document.getElementById('currentAddress').innerText += ' Changing address in progress. Please wait.';
    };

    onRegisterOwnerKeyUp() {
        var name = document.getElementById('registerOwner')['value'];
        var owner = web3.eth.namereg.owner(name)
        document.getElementById('currentAddress').innerText = web3.eth.namereg.addr(name);
        if (owner !== '0x0000000000000000000000000000000000000000') {
            if (owner === this.from) {
                document.getElementById('nameAvailability').innerText = "This name is already owned by you " + owner;
            } else {
                document.getElementById('nameAvailability').innerText = "This name is not available. It's already registered by " + owner;
            }
            return;
        }
        document.getElementById('nameAvailability').innerText = "This name is available. You can register it.";
    };

    onAddressKeyUp() {
        var address = document.getElementById('address')['value'];
        document.getElementById('nameOf').innerText = web3.eth.namereg.name(address);
    };
    
    onNameKeyUp() {
        var name = document.getElementById('name')['value'];
        document.getElementById('addressOf').innerText = web3.eth.namereg.addr(name);
    };
}