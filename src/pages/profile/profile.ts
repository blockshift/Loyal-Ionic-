import { AuthServiceProvider } from './../../providers/auth-service/auth-service';
import { User } from './../../models/user';
import { LoginPage } from './../login/login';
import { AngularFireDatabase } from 'angularfire2/database-deprecated';
import { AngularFireAuth } from 'angularfire2/auth';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { Profile } from '../../models/profile';

@IonicPage()

@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
})
export class ProfilePage {

  constructor( private alrtctrl : AlertController , private auth : AuthServiceProvider  ,private authfire : AngularFireAuth , public navCtrl: NavController, public navParams: NavParams, private datafire : AngularFireDatabase ) 
  {}


  alert(message : string) {
    this.alrtctrl.create({
  
      title: 'Info',
      subTitle: message,
      buttons: ['OK']
    }).present();
  
  } 

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProfilePage');
  }

responseData : any ;
  users = { } as Profile ;

  postData() {
console.log(this.users);
    console.log(this.users.name);
    console.log(this.users.emailaddress);
    console.log(this.users.password);
  
    this.auth.register(this.users).then((result) => {
      console.log(result);
      this.responseData = result;
      localStorage.setItem('userData', JSON.stringify(this.responseData));
      
      this.navCtrl.push(LoginPage);
      this.alert('Successfully ! You\'are Registered in ');
      
      
         
    });
  
  }
  

}
