import { WelcomePage } from './../pages/welcome/welcome';
//import { ProfilePage } from './../pages/profile/profile';
import { Component, ViewChild } from '@angular/core';

import { Platform, MenuController, Nav } from 'ionic-angular';

import { HelloIonicPage } from '../pages/hello-ionic/hello-ionic';
import { ListPage } from '../pages/list/list';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { LoginPage } from '../pages/login/login';
import { UserPage } from '../pages/user/user';
import { QrscannerPage } from '../pages/qrscanner/qrscanner';


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
    public splashScreen: SplashScreen
  ) {
    this.initializeApp();
    this.checkPreviousAuthorization();
    // set our app's pages
    this.pages = [
      { title: 'Hello Ionic', component: HelloIonicPage },
      { title: 'My First List', component: ListPage },
       { title : 'User Details' , component : UserPage },
       {title : 'QR Scanner' , component : QrscannerPage }
    ];
  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // close the menu when clicking a link from the menu
    this.menu.close();
    // navigate to the new page if it is not the current page
    this.nav.setRoot(page.component);
  }

  checkPreviousAuthorization(): void { 
    if((window.localStorage.getItem('email') === "undefined" || window.localStorage.getItem('email') === null)) 
     {
      this.rootPage = WelcomePage;
    } else {
      this.rootPage = HelloIonicPage;
    }
  } 

}
