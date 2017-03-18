import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { MaterialModule } from '@angular/material';

import { AppComponent } from './app.component';
import { TopMenu } from './components/topmenu/top.menu';
import { appRoutes } from './app.routes';
import { Home } from './components/home/home';
import { Login } from './components/login/login';
import { Footer } from './components/footer/footer';
import { UnderConstruction } from './components/underconstruction/under.construction';
import { Alert } from './components/alert/alert';

import { AuthenticationService } from './services/authentication.service';
import { AlertService } from './services/alert.service';

import { AdvertiserModule } from './modules/advertiser/advertiser.module';
import { ProviderModule } from './modules/provider/provider.module';
import { ActivationComponent } from './components/activation/activation.component';

import { RegistryComponent } from './components/registry/registry.component';
import { CampaignService } from './services/campaign.service';
import { SiteService } from './services/site.service';
import { UserService } from './services/user.service';
import { FoucsDirective } from './utils/foucs.directive';

import 'hammerjs';

@NgModule({
  declarations: [
    FoucsDirective,
    AppComponent,
    Home,
    Login,
    TopMenu,
    Footer,
    UnderConstruction,
    Alert,
    RegistryComponent,
    ActivationComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    HttpModule,
    MaterialModule.forRoot(),
    AdvertiserModule,
    ProviderModule,
  ],
  providers: [
    AuthenticationService,
    AlertService,
    UserService,
    CampaignService,
    SiteService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
