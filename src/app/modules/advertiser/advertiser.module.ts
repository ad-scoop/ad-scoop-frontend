import {AppModule} from '../../app.module';
import { MaterialComponent } from '../../material.component';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {advertiserRoutes} from './advertiser.routes';
import {AdvertiserComponent} from './advertiser.component';
import {AdvertiserGuard} from './advertiser.guard';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {CampaignComponent, ConfirmDialogComponent} from './components/campaign/campaign.component';
import {BannerComponent, BannerDialogComponent} from './components/banner/banner.component';
import {BannerUploadComponent} from './components/bannerupload/bannerupload.component';
import {EditCampaignComponent} from './components/editcampaign/editcampaign.component';
import {EditDialogComponent} from './components/editdialog/editdialog.component';
import {SearchsitesComponent} from './components/searchsites/searchsites.component';
import {SiteComponent} from './components/site/site.component';
import {FoucsDirective} from './utils/foucs.directive';
import {BannerMatcherComponent} from './components/bannermatcher/bannermatcher.component';
import {HomeComponent} from './components/home/home.component';
import {ButtonComponent} from './components/button/button.component';
import { ChartsModule } from 'ng2-charts';
import { EffectComponent } from './components/effect/effect.component';
import { ClicksComponent } from './components/clicks/clicks.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(advertiserRoutes),
    MaterialComponent,
    FormsModule,
    BrowserAnimationsModule,
    ChartsModule,
  ],
  declarations: [
    FoucsDirective,
    CampaignComponent,
    AdvertiserComponent,
    BannerComponent,
    BannerUploadComponent,
    EditCampaignComponent,
    SiteComponent,
    ConfirmDialogComponent,
    BannerDialogComponent,
    EditDialogComponent,
    SearchsitesComponent,
    BannerMatcherComponent,
    HomeComponent,
    ButtonComponent,
    EffectComponent,
    ClicksComponent,
  ],
  providers: [
    AdvertiserGuard,
  ],
})
export class AdvertiserModule {}
