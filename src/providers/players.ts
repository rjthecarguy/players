import { Injectable, NgZone } from '@angular/core';
import { Http } from '@angular/http';
import PouchDB from 'pouchdb';
import { Data } from './data';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/from';

/*
  Generated class for the WorkOrders provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class Players {

	
 postSubject: any = new Subject();   



  constructor(public http: Http, public dataService: Data, public zone: NgZone) {

  
  	 this.dataService.db.changes({live: true, since: 'now', include_docs: true}).on('change', (change) => {
            if(change.doc.type === 'Player'){
                this.emitPlayers();
            }
        });


    console.log('Hello Players Provider');
  }


addPlayer(player): void {

this.dataService.db.put(player);

}


  getPlayers() {


  	this.emitPlayers();

  	return this.postSubject;



  }


  emitPlayers(): void {
 
        this.zone.run(() => {
 
            this.dataService.db.query('players/byLastName').then((data) => {
 
                let Players = data.rows.map(row => {
                    return row.value;
                });
 
                this.postSubject.next(Players);
 
            });
 
        });
 
    }

}
