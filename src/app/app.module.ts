import { RegisterPageModule } from './../pages/register/register.module';
import { LoginPage } from './../pages/login/login';
//import { FIREBASE_CONFIG } from './app.firebase.config';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { HelloIonicPage } from '../pages/hello-ionic/hello-ionic';
import { ItemDetailsPage } from '../pages/item-details/item-details';
import { ListPage } from '../pages/list/list';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import {AngularFireModule} from 'angularfire2'
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RegisterPage } from '../pages/register/register';
import { AngularFireAuthModule } from "angularfire2/auth";
//import { AngularFireDatabaseModule } from 'angularfire2/database';
import { ProfilePageModule } from '../pages/profile/profile.module';
//import { AngularFireDatabase } from 'angularfire2/database';
//import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabaseModule, } from 'angularfire2/database-deprecated';


const FIREBASE_CONFIG =  {
  apiKey: "AIzaSyCDk9ZO-UPglhDu9tCYm2VL7LsXikYtJdY",
  authDomain: "loyal-490cf.firebaseapp.com",
  databaseURL: "https://loyal-490cf.firebaseio.com",
  projectId: "loyal-490cf",
  storageBucket: "loyal-490cf.appspot.com",
  messagingSenderId: "399875896631"
  };




@NgModule({
  declarations: [
    MyApp,
    HelloIonicPage,
    ItemDetailsPage,
    ListPage,
    LoginPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(FIREBASE_CONFIG),
    RegisterPageModule,
    AngularFireAuthModule,
    AngularFireDatabaseModule,
    ProfilePageModule

  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HelloIonicPage,
    ItemDetailsPage,
    ListPage,
    LoginPage,
    
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ],
  schemas:[ 
    CUSTOM_ELEMENTS_SCHEMA 
  ]
})
export class AppModule {}
