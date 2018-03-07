import { ProfilePage } from './../profile/profile';
import { User } from './../../models/user';
import { Component , ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';
//import { LoginPage } from '../login/login';



@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {

  @ViewChild('email') email ;
  @ViewChild('password') password ;

user = {} as User ;

alert(message : string) {
  this.alrtctrl.create({

    title: 'Info',
    subTitle: message,
    buttons: ['OK']
  }).present();

}  


  constructor(public navCtrl: NavController, public navParams: NavParams, private authfire : AngularFireAuth , public alrtctrl : AlertController ) {
  }

 register(user : User) {

  console.log(this.user);
  this.authfire.auth.createUserWithEmailAndPassword(user.email,user.password )
  .then(data =>{
    console.log("got data", data);
    this.alert('Successfully ! You\'are Registered ');
      this.navCtrl.push(ProfilePage); 
    
  })


.catch(error => {
  console.log("Error is ",error);
  this.alert(error.message);
});
}

}
