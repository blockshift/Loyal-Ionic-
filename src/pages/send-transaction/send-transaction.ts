import { HelloIonicPage } from './../hello-ionic/hello-ionic';
import { AuthServiceProvider } from './../../providers/auth-service/auth-service';
import { Send } from './../../models/send';
import { Http } from '@angular/http';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-send-transaction',
  templateUrl: 'send-transaction.html',
})
export class SendTransactionPage {
user = {} as Send ;
   constructor(public navCtrl: NavController, public navParams: NavParams , private auth : AuthServiceProvider  , public alrtctrl : AlertController ) {
  }


  alert(message : string) {
    this.alrtctrl.create({
  
      title: 'Info',
      subTitle: message,
      buttons: ['OK']
    }).present();
  
  } 

  ionViewDidLoad() {
    console.log('ionViewDidLoad SendTransactionPage');

    this.user.to = this.navParams.get('token');
    console.log(this.user.to);
    this.user.from = window.localStorage.getItem('userId');
    console.log(this.user.from);
  }
responseData : any ;
  sendToken(user : Send) {
    try {
   
    console.log("func mey",this);
    console.log("user ki id ",user.to );
     console.log(user.gravy );
     console.log("user data ",user );
     this.auth.send(user).then((result) => {
      console.log(result);
      this.responseData = result;
      console.log(this.responseData["_body"]);
      this.alert(  this.responseData["_body"]  );
      this.navCtrl.setRoot(HelloIonicPage);


     });
    }
  catch(error) {
    console.log("Error hai ",error);
  };

    

    }
  

}
