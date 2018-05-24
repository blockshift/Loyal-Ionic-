import { SendTransactionPage } from './../pages/send-transaction/send-transaction';
import { CampaignBuildPage } from './../pages/campaign-build/campaign-build';
import { Profile } from './../models/profile';
import { EmaiSignupPage } from './../pages/emai-signup/emai-signup';
import { UsernameSignupPage } from './../pages/username-signup/username-signup';
import { DiffSignupPage } from './../pages/diff-signup/diff-signup';
import { WelcomePage } from './../pages/welcome/welcome';
//import { ProfilePage } from './../pages/profile/profile';
import { Component, ViewChild } from '@angular/core';

import { Platform, MenuController, Nav, NavController } from 'ionic-angular';

import { HelloIonicPage } from '../pages/hello-ionic/hello-ionic';
import { ListPage } from '../pages/list/list';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { LoginPage } from '../pages/login/login';
import { UserPage } from '../pages/user/user';
import { QrscannerPage } from '../pages/qrscanner/qrscanner';
import { ProfilePage } from '../pages/profile/profile';
import { TransactionHistoryPage } from '../pages/transaction-history/transaction-history';
import { ListCampaignPage } from '../pages/list-campaign/list-campaign';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;
  

  // make HelloIonicPage the root (or first) page
 // rootPage = HelloIonicPage;


 rootPage : any ;

  pages: Array<{title: string, component: any}>;

  constructor(
    public platform: Platform,
    public menu: MenuController,
    public statusBar: StatusBar,
    public splashScreen: SplashScreen ,
   // public navctrl : NavController
  ) {
    this.initializeApp();
    this.checkPreviousAuthorization();
    // set our app's pages
    this.pages = [
      { title: 'Wallet', component: HelloIonicPage },
      //{ title: 'My First List', component: ListPage },
       { title : 'User Details' , component : UserPage },
       {title : 'QR Scanner' , component : QrscannerPage },
      //{title : 'Profile' , component : ProfilePage },
      {title : 'Transaction History', component : TransactionHistoryPage},
      {title : 'List Campaign' , component : ListCampaignPage },
      {title : 'Build Campaign' , component : CampaignBuildPage },
      // {title : 'Sending Points' , component : SendTransactionPage },
    ];
  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();

    });
  
    if((window.localStorage.getItem('email') != "undefined" || window.localStorage.getItem('email') != null  )&&(window.localStorage.getItem('name') != "undefined" || window.localStorage.getItem('name') != null  )) 
    {



      
console.log("hello");
 this.user.emailaddress = window.localStorage.getItem('email');
this.user.name = window.localStorage.getItem('name') ;
console.log("email hai ",this.user.emailaddress);
console.log("name hai",this.user.name);
      }
      else {
        console.log("data doesnot exist");
      }

  
  }

  user = {} as Profile ;

  

  openPage(page) {
    // close the menu when clicking a link from the menu
    this.menu.close();
    // navigate to the new page if it is not the current page
    this.nav.setRoot(page.component);
  }

  forward() {
    this.nav.setRoot(UserPage);
    this.menu.close();
  }

  checkPreviousAuthorization(): void { 
    if((window.localStorage.getItem('name') === "undefined" || window.localStorage.getItem('name') === null)) 
     {
      this.rootPage = WelcomePage;
    } else {
      this.rootPage = HelloIonicPage;
    }
  } 

}
