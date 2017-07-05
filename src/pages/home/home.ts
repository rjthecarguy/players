import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Players} from '../../providers/players';
import { PlayerDetail } from '../../pages/player-detail/player-detail'


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

searchForm: FormGroup;
playerRecord: any;
searchString:any;;
searchLast:boolean = true;

  constructor(public navCtrl: NavController, public formBuilder: FormBuilder, public playerService: Players ) {


  	this.searchForm = formBuilder.group({
        lastName: ['',Validators.compose([Validators.required])]
    });




  }


search()  {

this.playerService.searchString = this.searchForm.controls.lastName.value;

this.playerService.getPlayers();

	

}


setSearchLast() {

this.searchLast = true;
this.playerService.queryMap ="players/byLastName";

}

setSearchFirst() {

this.searchLast = false;
this.playerService.queryMap ="players/byFirstName";

}


playerDetails(player) {

this.navCtrl.push(PlayerDetail, {recordParam:player});
}

  ionViewDidLoad() {

  	this.playerService.getPlayers().subscribe((Player) => {
 		this.playerRecord = Player;
            
        });

  	
  }

}
