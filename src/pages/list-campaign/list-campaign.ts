import { Campaign } from './../../models/campaign';
import { Http } from '@angular/http';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Loading, LoadingController } from 'ionic-angular';

/**
 * Generated class for the ListCampaignPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-list-campaign',
  templateUrl: 'list-campaign.html',
})
export class ListCampaignPage {

  constructor(private http : Http ,public navCtrl: NavController, public navParams: NavParams, public loading : LoadingController ) {
  }
  

parsing : any ;

kam :  any ;

  ionViewDidLoad() {
    console.log('ionViewDidLoad ListCampaignPage');
   this.list();
   


  }

  presentLoading() {
    let loader = this.loading
  }

list () {
  try {
    let loader = this.loading.create({
      content: 'Getting latest Offers...',
      duration : 9000
    });
    loader.present().then(() => {
    this.http.get('https://gravynodeapi.azurewebsites.net/listdeals' )
    .map(res => res.json() )
    .subscribe(data =>  {
    console.log("data hai" ,data);
    console.log(data);





this.parsing = JSON.stringify(data);
console.log(this.parsing);

this.kam = JSON.parse(this.parsing);
console.log(this.kam[1].campaign_name);


    });
    loader.dismiss();
  });
  
  }

  catch(error) {
    console.log("Error hai ",error);
    // this.alert('Sorry ! You\'are NOT Logged in ');
    // this.alert('Sorry Login failed /n Email or Password Incorrect ');
  };
}

}
