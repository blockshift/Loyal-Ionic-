import { AngularFireAuth } from 'angularfire2/auth';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFireDatabase , FirebaseObjectObservable } from 'angularfire2/database-deprecated';
import { Profile } from '../../models/profile';


@IonicPage()
@Component({
  selector: 'page-user',
  templateUrl: 'user.html',
})
export class UserPage {

  profileData : FirebaseObjectObservable<Profile>

  constructor( private authfire : AngularFireAuth , public navCtrl: NavController, public navParams: NavParams,
    private datafire : AngularFireDatabase  ) 
 {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad UserPage');

    this.authfire.authState.take(1).subscribe( data => {
      if(data && data.email && data.uid ) {
      
console.log("hello");
        this.profileData = this.datafire.object(`profile/${data.uid}`); 
        console.log(data);

      }
      else {
        console.log("data doesnot exist", data );
      }
    })

  }

}
