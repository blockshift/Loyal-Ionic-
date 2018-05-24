import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PasswordSignupPage } from './password-signup';

@NgModule({
  declarations: [
    PasswordSignupPage,
  ],
  imports: [
    IonicPageModule.forChild(PasswordSignupPage),
  ],
})
export class PasswordSignupPageModule {}
