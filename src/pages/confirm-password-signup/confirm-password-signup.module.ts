import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ConfirmPasswordSignupPage } from './confirm-password-signup';

@NgModule({
  declarations: [
    ConfirmPasswordSignupPage,
  ],
  imports: [
    IonicPageModule.forChild(ConfirmPasswordSignupPage),
  ],
})
export class ConfirmPasswordSignupPageModule {}
