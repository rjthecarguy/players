import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the PlayerDetail page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-player-detail',
  templateUrl: 'player-detail.html',
})
export class PlayerDetail {

playerRecord:any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {


  	this.playerRecord = this.navParams.get('recordParam');
  	
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PlayerDetail');

    

    console.log(this.playerRecord.lastName);
  }

}
