import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CampaignBuildPage } from './campaign-build';

@NgModule({
  declarations: [
    CampaignBuildPage,
  ],
  imports: [
    IonicPageModule.forChild(CampaignBuildPage),
  ],
})
export class CampaignBuildPageModule {}
