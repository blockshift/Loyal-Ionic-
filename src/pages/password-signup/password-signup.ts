import { ConfirmPasswordSignupPage } from './../confirm-password-signup/confirm-password-signup';
import { LoginPage } from './../login/login';
import { AuthServiceProvider } from './../../providers/auth-service/auth-service';
import { Profile } from './../../models/profile';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { EmaiSignupPage } from '../emai-signup/emai-signup';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

/**
 * Generated class for the PasswordSignupPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-password-signup',
  templateUrl: 'password-signup.html',
})
export class PasswordSignupPage {


  alert(message : string) {
    this.alrtctrl.create({
  
      title: 'Info',
      subTitle: message,
      buttons: ['OK']
    }).present();
  
  } 

  constructor(private auth : AuthServiceProvider ,public navCtrl: NavController, public navParams: NavParams , public alrtctrl : AlertController ) {
  }

user = {} as Profile ;

name : string;
email  : string ;
 
  ionViewDidLoad() {
    console.log('ionViewDidLoad PasswordSignupPage');

this.name = this.navParams.get('name');
this.email = this.navParams.get('email');

  }

  responseData : any ;

forward(user :  Profile) {
  //console.log(this.user);
  console.log(this.name);
  console.log(this.email);
console.log(this.user.password);

this.navCtrl.push(ConfirmPasswordSignupPage , 
{
name : this.name,
email : this.email, 
password : this.user.password
});


}

back() {
  this.navCtrl.pop();
}


}
