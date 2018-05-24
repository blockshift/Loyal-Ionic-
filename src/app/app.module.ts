import { QrscannerPage } from './../pages/qrscanner/qrscanner';
import { SendTransactionPage } from './../pages/send-transaction/send-transaction';
import { ListCampaignPageModule } from './../pages/list-campaign/list-campaign.module';
import { ListCampaignPage } from './../pages/list-campaign/list-campaign';
import { CampaignBuildPageModule } from './../pages/campaign-build/campaign-build.module';
import { CampaignBuildPage } from './../pages/campaign-build/campaign-build';
import { PasswordSignupPageModule } from './../pages/password-signup/password-signup.module';
import { PasswordSignupPage } from './../pages/password-signup/password-signup';
import { EmaiSignupPageModule } from './../pages/emai-signup/emai-signup.module';
import { EmaiSignupPage } from './../pages/emai-signup/emai-signup';
import { UsernameSignupPageModule } from './../pages/username-signup/username-signup.module';
import { UsernameSignupPage } from './../pages/username-signup/username-signup';
import { DiffSignupPage } from './../pages/diff-signup/diff-signup';
import { WelcomePage } from './../pages/welcome/welcome';
import { IonicStorageModule } from '@ionic/storage';

import { RegisterPageModule } from './../pages/register/register.module';
import { LoginPage } from './../pages/login/login';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { HelloIonicPage } from '../pages/hello-ionic/hello-ionic';
import { ItemDetailsPage } from '../pages/item-details/item-details';
import { ListPage } from '../pages/list/list';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ProfilePageModule } from '../pages/profile/profile.module';
import { UserPageModule } from '../pages/user/user.module';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';
import { QrscannerPageModule } from '../pages/qrscanner/qrscanner.module';
import { AuthServiceProvider } from '../providers/auth-service/auth-service';
import {HttpModule} from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { NgxQRCodeModule } from 'ngx-qrcode2';
import { DiffSignupPageModule } from '../pages/diff-signup/diff-signup.module';
import { ConfirmPasswordSignupPageModule } from '../pages/confirm-password-signup/confirm-password-signup.module';
import { ConfirmPasswordSignupPage } from '../pages/confirm-password-signup/confirm-password-signup';
import { TransactionHistoryPage } from '../pages/transaction-history/transaction-history';
import { TransactionHistoryPageModule } from '../pages/transaction-history/transaction-history.module';

import { File } from '@ionic-native/file';
import { Transfer } from '@ionic-native/transfer';
import { FilePath } from '@ionic-native/file-path';
import { Camera } from '@ionic-native/camera';
import { SendTransactionPageModule } from '../pages/send-transaction/send-transaction.module';
import { FileTransfer} from '@ionic-native/file-transfer';

@NgModule({
  declarations: [
    MyApp,
    HelloIonicPage,
    ItemDetailsPage,
    ListPage,
    LoginPage,
    WelcomePage,
    QrscannerPage
    //UserPage
    
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    RegisterPageModule,
    ProfilePageModule,
    UserPageModule,
    HttpModule,
    HttpClientModule,
    NgxQRCodeModule,
    DiffSignupPageModule,
    UsernameSignupPageModule,
    EmaiSignupPageModule,
    PasswordSignupPageModule,
    ConfirmPasswordSignupPageModule,
    TransactionHistoryPageModule,
    CampaignBuildPageModule,
    ListCampaignPageModule,
    SendTransactionPageModule,
    IonicStorageModule.forRoot()


  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HelloIonicPage,
    ItemDetailsPage,
    ListPage,
    LoginPage,
    WelcomePage,
    DiffSignupPage,
    UsernameSignupPage,
    EmaiSignupPage,
    PasswordSignupPage,
    ConfirmPasswordSignupPage,
    TransactionHistoryPage,
    CampaignBuildPage,
    ListCampaignPage, 
    SendTransactionPage,
    QrscannerPage

  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    BarcodeScanner,
    AuthServiceProvider,
    Transfer,
    Camera,
    FilePath,
    File,
    FileTransfer
  ],
  schemas:[ 
    CUSTOM_ELEMENTS_SCHEMA 
  ]
})
export class AppModule {}
