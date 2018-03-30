import { User } from './../../models/user';

import { AngularFireAuth } from 'angularfire2/auth';
import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { HelloIonicPage } from '../hello-ionic/hello-ionic';
//import { ProfilePage } from '../profile/profile';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {


  constructor(private authfire : AngularFireAuth, public navCtrl: NavController, public navParams: NavParams, public alrtctrl : AlertController ) {
  }

  user = {} as User ;

alert(message : string) {
  this.alrtctrl.create({

    title: 'Info',
    subTitle: message,
    buttons: ['OK']
  }).present();

}  

login(user : User) {
  try {
    console.log(this.user);
    this.authfire.auth.signInWithEmailAndPassword(this.user.email,this.user.password )
    .then(data =>{
      console.log("got data", data);
      this.alert('Successfully ! You\'are Logged in ');
      window.localStorage.setItem('email',this.user.email);
      this.navCtrl.setRoot(HelloIonicPage);
    })
  }
  catch(error) {
    console.log("Error hai ",error);

    this.alert('Sorry Login failed /n Email or Password Incorrect ');
  };
  }
  


register() {
this.navCtrl.push('RegisterPage');
}


}
