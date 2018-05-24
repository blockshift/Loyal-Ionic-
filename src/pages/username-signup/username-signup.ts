import { DiffSignupPage } from './../diff-signup/diff-signup';
import { EmaiSignupPage } from './../emai-signup/emai-signup';
import { Profile } from './../../models/profile';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the UsernameSignupPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-username-signup',
  templateUrl: 'username-signup.html',
})
export class UsernameSignupPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {



  }

  user = {} as Profile ;

  ionViewDidLoad() {
    console.log('ionViewDidLoad UsernameSignupPage');
  }

forward(user : Profile) {
  console.log(this.user.name);
  this.navCtrl.push(EmaiSignupPage,{
     data : this.user.name});
}

back() {
this.navCtrl.pop();

}


}
