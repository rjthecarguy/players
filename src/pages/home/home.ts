import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { WorkOrders} from '../../providers/work-orders';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

workOrder: any;


  constructor(public navCtrl: NavController, public woService: WorkOrders) {

  }


  ionViewDidLoad() {

  	this.woService.getWorkOrders().subscribe((WorkOrder) => {
 		this.workOrder = WorkOrder;
            
        });
  }

}
