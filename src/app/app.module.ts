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

import { AdvertiserModule } from './advertiser/advertiser.module';

import { DirectiveFoucs } from './utils/directive.foucs';
import { RegistryComponent } from './components/registry/registry.component';
import { UserService } from './services/user.service';

import 'hammerjs';

@NgModule({
  declarations: [
    AppComponent,
    Home,
    Login,
    TopMenu,
    DirectiveFoucs,
    Footer,
    UnderConstruction,
    Alert,
    RegistryComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    HttpModule,
    MaterialModule.forRoot(),
    AdvertiserModule,
  ],
  providers: [
    AuthenticationService,
    AlertService,
    UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
