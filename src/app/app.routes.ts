import { Routes } from '@angular/router';
import { Home } from './components/home/home';
import { Login } from './components/login/login';

export const appRoutes: Routes = [
  { path: 'home', component: Home },
  { path: 'login', component: Login },
];