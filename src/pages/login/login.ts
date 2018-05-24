
import { DiffSignupPage } from './../diff-signup/diff-signup';
import { Http } from '@angular/http';
import { AuthServiceProvider } from './../../providers/auth-service/auth-service';
import { User } from './../../models/user';

import { Component} from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { HelloIonicPage } from '../hello-ionic/hello-ionic';
import { ProfilePage } from '../profile/profile';
import { Storage } from '@ionic/storage';


@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

okay  : any ;
  constructor(private storage : Storage  ,private http : Http , private authservice : AuthServiceProvider , public navCtrl: NavController, public navParams: NavParams, public alrtctrl : AlertController ) {
  }

  user = {} as User ;

alert(message : string) {
  this.alrtctrl.create({

    title: 'Info',
    subTitle: message,
    buttons: ['OK']
  }).present();

}  


responseData : any ;

login(user : User) {
  
     console.log(this.user);

     this.authservice.login(this.user).then((result) => {
      console.log(result);
      this.responseData = result;
      
      console.log(this.responseData);
      
      console.log("This is data received",this.responseData["_body"]);

      
      if( this.responseData["_body"] ==  "Incorrect password"    ) {
        
        this.alert("Sorry , Username or Password is Incorrect");
        

      }

      else if( this.responseData["_body"] ==  "Please signup"    ) {
        
        this.alert("Please register ");
        

      }


      
      else {
        this.alert("Login Successfull");
        console.log(user);

        // this.storage.set('name',user.name);
        window.localStorage.setItem('userId',this.responseData);
      window.localStorage.setItem('name',user.name);
        this.navCtrl.setRoot(HelloIonicPage);

      }
     });
      

  

    }
  


register() {
this.navCtrl.push(DiffSignupPage);
}


}
