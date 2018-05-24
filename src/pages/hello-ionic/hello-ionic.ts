import { AuthServiceProvider } from './../../providers/auth-service/auth-service';

import { Http } from '@angular/http';
import { QrscannerPage } from './../qrscanner/qrscanner';
import { LoginPage } from './../login/login';

import { NavController, NavParams, ToastController, LoadingController } from 'ionic-angular';

import { Component } from '@angular/core';
import { Profile } from '../../models/profile';
import { Qrcode } from '../../models/qrcode';
import { Storage } from '@ionic/storage';


@Component({
  selector: 'page-hello-ionic',
  templateUrl: 'hello-ionic.html'
})
export class HelloIonicPage {

token : number  ;


  constructor(private store : Storage , public navCtrl: NavController, public navParams: NavParams,
      private toast :  ToastController , public http : Http  , public loading : LoadingController , private auth :  AuthServiceProvider ) 
  {
  }

 

response : any ;

resp : any ;

  ionViewWillLoad() {
    console.log('ionViewDidLoad HelloIonicPage');
   
//     this.resp = this.store.get('name');
// console.log("hello ", this.resp);

      if((window.localStorage.getItem('name') != "undefined" || window.localStorage.getItem('name') != null)) 
     {
      let name = window.localStorage.getItem('name');
      console.log("name",name);
        this.toast.create({
          message : `Welcome to Gravy Points , ${name} `,
          duration : 4000 
        }).present();
 

      }
      else {
        this.toast.create({
          message : `could not find the Authentication details. ` ,
          duration : 3000
        }).present();
      }
    
      this.response = window.localStorage.getItem('userId');
  console.log("user id hai", this.response);
  this.checkToken();
  }

  data = {} as Qrcode
  responseData :any ;
  checkToken() {
    try {
      console.log(this.response);
      this.data.token = this.response;
      console.log("token", this.response );
      let loader = this.loading.create({
        content: 'please wait...',
        duration : 9000
      });
      loader.present().then(() => {
      this.auth.getToken(this.data).then((result) => {
        console.log(result);
        this.responseData = result;
        console.log(this.responseData["_body"]);
        this.token = this.responseData["_body"] ;
        
        // localStorage.setItem('userData', JSON.stringify(this.responseData));


    });
    loader.dismiss();
  });
  }
    catch(error) {
      console.log("Error hai ",error);
    };

  }

  qrcode() {
    this.navCtrl.setRoot(QrscannerPage);
  }

  scan() {
    this.navCtrl.push(QrscannerPage);
  }


}
