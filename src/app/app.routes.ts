import { Routes } from '@angular/router';
import { Home } from './components/home/home';
import { Login } from './components/login/login';
import { UnderConstruction } from './components/underConstruction/underConstruction';

export const appRoutes: Routes = [
  { path: '', component: Home },
  { path: 'login', component: Login },
  { path: 'underConstruction', component: UnderConstruction }
];