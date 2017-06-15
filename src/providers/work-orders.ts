import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import PouchDB from 'pouchdb';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/from';

/*
  Generated class for the WorkOrders provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class WorkOrders {

	db: any;
    remote: string = 'http://74.208.165.188:5984/ics';



  constructor(public http: Http) {

  	this.db = new PouchDB('ics');
 
        let options = {
          live: true,
          retry: true
        };
 
       this.db.sync(this.remote, options);



    console.log('Hello WorkOrders Provider');
  }

  getWorkOrders(): Observable<any> {
  	//return this.http.get('http://74.208.165.188:5984/ics/_design/workOrders/_view/Work_Orders').map(res => res.json()); 
  	return Observable.from(this.db.query('workOrders/Work_Orders'));
  }

}
