import { WelcomePage } from './../welcome/welcome';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Profile } from '../../models/profile';
import { LoginPage } from '../login/login';


@IonicPage()
@Component({
  selector: 'page-user',
  templateUrl: 'user.html',
})
export class UserPage {

  constructor( public navCtrl: NavController, public navParams: NavParams ) 
 {}
 user = {} as Profile ;
 
  ionViewDidLoad() {
    console.log('ionViewDidLoad UserPage');

    if((window.localStorage.getItem('email') != "undefined" || window.localStorage.getItem('email') != null  )&&(window.localStorage.getItem('name') != "undefined" || window.localStorage.getItem('name') != null  )) 
    {



      
console.log("hello");
 this.user.emailaddress = window.localStorage.getItem('email')
this.user.name = window.localStorage.getItem('name')
console.log("email",this.user.emailaddress);
console.log("name",this.user.name)
      }
      else {
        console.log("data doesnot exist");
      }

  }

  logout() {
    window.localStorage.removeItem('email');
    window.localStorage.removeItem('name');
    window.localStorage.removeItem('userId');

  this.navCtrl.setRoot(WelcomePage);
      this.navCtrl.popToRoot();   

}

}
