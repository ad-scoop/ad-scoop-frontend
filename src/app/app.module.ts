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

import { DirectiveFoucs } from './utils/directive.foucs';

@NgModule({
  declarations: [
    AppComponent,
    Home,
    Login,
    TopMenu,
    DirectiveFoucs,
    Footer,
    UnderConstruction
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    HttpModule,
    MaterialModule.forRoot(),
  ],
  providers: [
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
