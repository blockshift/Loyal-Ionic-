import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DiffSignupPage } from './diff-signup';

@NgModule({
  declarations: [
    DiffSignupPage,
  ],
  imports: [
    IonicPageModule.forChild(DiffSignupPage),
  ],
})
export class DiffSignupPageModule {}
