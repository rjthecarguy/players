import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Players} from '../../providers/players';
import { HomePage } from '../../pages/home/home';


/**
 * Generated class for the AddPlayer page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-add-player',
  templateUrl: 'add-player.html',
})
export class AddPlayer {

player: FormGroup;


playerRecord: any = {
        _id: null,
        firstName: '',
        lastName: '',
        birthDate: '',
        rating: '',
        dateUpdated: '',
        datePublished: '',
        phone: '',
        type: 'player'
    };



  constructor(public navCtrl: NavController, public navParams: NavParams, public formBuilder: FormBuilder, public playerService : Players) {


  		this.player = formBuilder.group({
        firstName: ['',Validators.compose([Validators.required, Validators.pattern('[a-zA-Z ]*')])],
        lastName: ['',Validators.compose([Validators.required, Validators.pattern('[a-zA-Z ]*')])],
        birthDate: ['',Validators.compose([Validators.required])],
        rating: ['',Validators.compose([Validators.required])],
        phone: ['',Validators.compose([Validators.required])]
        });


  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddPlayer');
  }


  save(){
 
        // Generate computed fields
        this.playerRecord._id = new Date().toISOString();
        this.playerRecord.datePublished = new Date().toISOString();
        this.playerRecord.dateUpdated = new Date().toISOString();
        this.playerRecord.firstName = this.player.controls.firstName.value;
        this.playerRecord.lastName = this.player.controls.lastName.value;
        this.playerRecord.birthDate = this.player.controls.birthDate.value;
        this.playerRecord.rating = this.player.controls.rating.value;
        this.playerRecord.phone = this.player.controls.phone.value;

 
        this.playerService.addPlayer(this.playerRecord);

        this.navCtrl.setRoot(HomePage);
 
        
 
    }

}
