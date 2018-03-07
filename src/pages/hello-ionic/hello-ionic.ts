import { AngularFireDatabase , FirebaseObjectObservable } from 'angularfire2/database-deprecated';
import { NavController, NavParams, ToastController } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';
import { Component } from '@angular/core';
import { Profile } from '../../models/profile';


@Component({
  selector: 'page-hello-ionic',
  templateUrl: 'hello-ionic.html'
})
export class HelloIonicPage {


profileData : FirebaseObjectObservable<Profile>


  constructor( private authfire : AngularFireAuth , public navCtrl: NavController, public navParams: NavParams,
     private datafire : AngularFireDatabase , private toast :  ToastController ) 
  {}

  ionViewWillLoad() {
    console.log('ionViewDidLoad HelloIonicPage');
    this.authfire.authState.take(1).subscribe( data => {
      if(data && data.email && data.uid ) {
        this.toast.create({
          message : `Welcome to App , ${data.email} `,
          duration : 4000 
        }).present();

        this.profileData = this.datafire.object(`profile/${data.uid}`); 

      }
      else {
        this.toast.create({
          message : `could not find the Authentication details. ` ,
          duration : 3000
        }).present();
      }
    })
  }


}
