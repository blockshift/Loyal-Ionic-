import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EmaiSignupPage } from './emai-signup';

@NgModule({
  declarations: [
    EmaiSignupPage,
  ],
  imports: [
    IonicPageModule.forChild(EmaiSignupPage),
  ],
})
export class EmaiSignupPageModule {}
