import { DiffSignupPage } from './../diff-signup/diff-signup';
import { AuthServiceProvider } from './../../providers/auth-service/auth-service';
import { LoginPage } from './../login/login';
import { Profile } from './../../models/profile';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-confirm-password-signup',
  templateUrl: 'confirm-password-signup.html',
})
export class ConfirmPasswordSignupPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, private auth : AuthServiceProvider ,public alrtctrl : AlertController ) {
  }

  name : string;
  email  : string ;
  password : string ;


  ionViewDidLoad() {
    console.log('ionViewDidLoad ConfirmPasswordSignupPage');

    this.name = this.navParams.get('name');
    this.email = this.navParams.get('email');
    this.password = this.navParams.get('password');

  }

  alert(message : string) {
    this.alrtctrl.create({
  
      title: 'Info',
      subTitle: message,
      buttons: ['OK']
    }).present();
  
  } 

users = {
  confirmpassword  : "" 
}

user = {} as Profile ; 

back() {
  this.navCtrl.pop();
}

responseData : any ;


forward(user : Profile) {

console.log(this.users.confirmpassword);
console.log(this.name);
console.log(this.email);
console.log(this.password);


if (this.password == this.users.confirmpassword){
  this.user.name =this.name;
this.user.emailaddress = this.email;
this.user.password =this.password;
console.log(this.user);

console.log("User data" ,user);
this.auth.register(this.user).then((result) => {
  console.log(result);
  this.responseData = result;
  console.log(this.responseData);
      
  console.log("This is data received",this.responseData["_body"]);
  
  
  if( this.responseData["_body"] ==  "Successfully registered"   ){

    this.alert('Successfully ! You\'re Registered in ');
    this.navCtrl.setRoot(LoginPage);

  
  }
  else{
    
    

    this.alert("You are already registerd.. Please Login!!");
    this.navCtrl.setRoot(DiffSignupPage);

  }
  
  
  
  
     
});

}

else {
  this.alert('Password Not Match ');
}


}





}
