import { Profile } from './../../models/profile';
import { PasswordSignupPage } from './../password-signup/password-signup';
import { UsernameSignupPage } from './../username-signup/username-signup';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';



@IonicPage()
@Component({
  selector: 'page-emai-signup',
  templateUrl: 'emai-signup.html',
})
export class EmaiSignupPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

 
name  : string ;

  ionViewDidLoad() {
    console.log('ionViewDidLoad EmaiSignupPage');

 this.name = this.navParams.get('data');

 console.log(this.name);
  
  }

  
user = {} as Profile ;


  forward(user : Profile ) {
    console.log(this.name);    
    console.log(this.user)
this.navCtrl.push(PasswordSignupPage , {
  name : this.name ,
  email : this.user.emailaddress
});
  }

  back() {
    this.navCtrl.pop();
  }

}
