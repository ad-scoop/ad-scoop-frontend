import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {RouterModule} from '@angular/router';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {AppComponent} from './app.component';
import {TopMenuComponent, TopMenuButtonComponent} from './components/topmenu/top.menu.component';
import {appRoutes} from './app.routes';
import {Home} from './components/home/home';
import {LoginComponent, ProfileDialogComponent} from './components/login/login.component';
import {Footer} from './components/footer/footer';
import {UnderConstruction} from './components/underconstruction/under.construction';
import {Alert} from './components/alert/alert';

import {AuthenticationService} from './services/authentication.service';
import {AlertService} from './services/alert.service';

import {AdvertiserModule} from './modules/advertiser/advertiser.module';
import {ProviderModule} from './modules/provider/provider.module';
import {ActivationComponent} from './components/activation/activation.component';

import {RegistryComponent} from './components/registry/registry.component';
import {MaterialComponent} from './material.component';
import {CampaignService} from './services/campaign.service';
import {EventService} from './services/event.service';
import {SiteService} from './services/site.service';
import {UserService} from './services/user.service';
import {FoucsDirective} from './utils/foucs.directive';
import {HashLocationStrategy, LocationStrategy} from '@angular/common';
import {ButtonComponent} from './components/button/button.component';
import {AgmCoreModule} from '@agm/core';

import 'hammerjs';
import {ContactComponent} from './components/contact/contact.component';

@NgModule({
  declarations: [
    FoucsDirective,
    AppComponent,
    Home,
    LoginComponent,
    TopMenuComponent,
    Footer,
    UnderConstruction,
    Alert,
    RegistryComponent,
    ActivationComponent,
    ProfileDialogComponent,
    ButtonComponent,
    TopMenuButtonComponent,
    ContactComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    HttpModule,
    AdvertiserModule,
    ProviderModule,
    BrowserAnimationsModule,
    MaterialComponent,
    ReactiveFormsModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAWS8jINtZMGD1P3Z5tEh_dH03O13_HrHw'
    })
  ],
  providers: [
    AuthenticationService,
    AlertService,
    UserService,
    CampaignService,
    SiteService,
    EventService,
    {provide: LocationStrategy, useClass: HashLocationStrategy}
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
