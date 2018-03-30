import { LoginPage } from './../login/login';
import { AngularFireDatabase } from 'angularfire2/database-deprecated';
import { AngularFireAuth } from 'angularfire2/auth';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Profile } from '../../models/profile';
//import { HelloIonicPage } from '../hello-ionic/hello-ionic';

/**
 * Generated class for the ProfilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
})
export class ProfilePage {

  constructor( private authfire : AngularFireAuth , public navCtrl: NavController, public navParams: NavParams, private datafire : AngularFireDatabase ) 
  {}


  ionViewDidLoad() {
    console.log('ionViewDidLoad ProfilePage');
  }

  profile = {} as Profile

  create() {
console.log(this.profile);

this.authfire.authState.take(1).subscribe(auth => { 
  this.datafire.object(`profile/${auth.uid}`).set(this.profile)
    .then(() => this.navCtrl.setRoot(LoginPage));

})


  }

}
