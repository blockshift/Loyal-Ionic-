import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { UsernameSignupPage } from './username-signup';

@NgModule({
  declarations: [
    UsernameSignupPage,
  ],
  imports: [
    IonicPageModule.forChild(UsernameSignupPage),
  ],
})
export class UsernameSignupPageModule {}
