import {MaterialComponent} from '../../material.component';
import {EditDialogComponent} from './components/editdialog/editdialog.component';
import {EditSiteComponent} from './components/editsite/editsite.component';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {providerRoutes} from './provider.routes';
import {ProviderComponent} from './provider.component';
import {ProviderGuard} from './provider.guard';
import {UrlSafePipe} from '../../utils/urlsafe.pipe';
import {BannerComponent} from './components/banner/banner.component';
import {ButtonComponent} from './components/button/button.component';
import {EditSiteInfoComponent} from './components/editsiteinfo/editsiteinfo.component';
import {HomeComponent} from './components/home/home.component';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {SiteComponent} from './components/site/site.component';
import {FoucsDirective} from './utils/foucs.directive';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(providerRoutes),
    MaterialComponent,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
  ],
  declarations: [
    FoucsDirective,
    SiteComponent,
    EditSiteComponent,
    EditDialogComponent,
    ProviderComponent,
    UrlSafePipe,
    EditSiteInfoComponent,
    BannerComponent,
    HomeComponent,
    ButtonComponent
  ],
  providers: [
    ProviderGuard,
  ],
})
export class ProviderModule {}
