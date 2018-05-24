import { UsernameSignupPage } from './../username-signup/username-signup';
import { ProfilePage } from './../profile/profile';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { LoginPage } from '../login/login';

/**
 * Generated class for the DiffSignupPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-diff-signup',
  templateUrl: 'diff-signup.html',
})
export class DiffSignupPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DiffSignupPage');
  }


create() {
  this.navCtrl.push(UsernameSignupPage);
}

login() {
  this.navCtrl.setRoot(LoginPage);
}

}
