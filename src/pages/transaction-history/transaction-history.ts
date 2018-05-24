import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the TransactionHistoryPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-transaction-history',
  templateUrl: 'transaction-history.html',
})
export class TransactionHistoryPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

name : string ;
token : number ;


  ionViewDidLoad() {

    console.log('ionViewDidLoad TransactionHistoryPage');
  
  this.name = this.navParams.get('name');
  this.token = this.navParams.get('token');
  console.log(this.name);
  console.log(this.token);
  
  }

}
