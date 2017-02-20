import { AppModule } from '../../app.module'
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { advertiserRoutes } from './advertiser.routes';
import { AdvertiserComponent } from './advertiser.component';
import { AdvertiserGuard } from './advertiser.guard';
import { MaterialModule } from '@angular/material';

import { CampaignComponent, ConfirmDialogComponent, EditDialogComponent } from './components/campaign/campaign.component';
import { BannerComponent, BannerDialogComponent } from './components/banner/banner.component';
import { BannerUploadComponent } from './components/bannerupload/bannerupload.component';
import { EditCampaignComponent } from './components/editcampaign/editcampaign.component';
import { SiteComponent } from './components/site/site.component';

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
    BannerComponent,
    BannerUploadComponent,
    EditCampaignComponent,
    SiteComponent,
    ConfirmDialogComponent,
    BannerDialogComponent,
    EditDialogComponent,
  ],
  providers: [
    AdvertiserGuard,
  ],
})
export class AdvertiserModule { }
