import { Injectable } from '@angular/core';
import { RequestOptions } from '@angular/http';
import { DataService } from './data.service';

@Injectable()
export class AuthService {

	constructor(
		public requestOptions:RequestOptions, 
		public dataService:DataService){
		console.log('authService');
		requestOptions.headers.set('Content-type', 'application/json');
		// this.loadToken();
	}

	loadToken(){
		this.dataService
			.get('/token').subscribe(
				(result) => {
	            	console.log('response here',result);
	            	this.requestOptions.headers.set('X-CSRF-TOKEN', result.csrfToken as string);
	            },
            	(err) => {
            		console.log('error code',err.status)
            	});
	}

}