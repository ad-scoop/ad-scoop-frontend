import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { advertiserRoutes } from './advertiser.routes';
import { AdvertiserComponent } from './advertiser.component';
import { AdvertiserGuard } from './advertiser.guard';
import { MaterialModule } from '@angular/material';

import { CampaignComponent } from './components/campaign/campaign.component';
import { BannerlistComponent } from './components/bannerlist/bannerlist.component';
import { BannerUploadComponent } from './components/bannerupload/bannerupload.component';
import { CreatecampaignComponent } from './components/createcampaign/createcampaign.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(advertiserRoutes),
    MaterialModule.forRoot(),
    FormsModule,
  ],
  declarations: [
    CampaignComponent,
    AdvertiserComponent,
    BannerlistComponent,
    BannerUploadComponent,
    CreatecampaignComponent,
  ],
  providers: [
    AdvertiserGuard,
  ],
})
export class AdvertiserModule { }
