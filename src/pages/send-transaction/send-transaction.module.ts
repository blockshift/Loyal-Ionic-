import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SendTransactionPage } from './send-transaction';

@NgModule({
  declarations: [
    SendTransactionPage,
  ],
  imports: [
    IonicPageModule.forChild(SendTransactionPage),
  ],
})
export class SendTransactionPageModule {}
