import { ActivationComponent } from './components/activation/activation.component'
import { Routes } from '@angular/router';
import { Home } from './components/home/home';
import { Login } from './components/login/login';
import { RegistryComponent } from './components/registry/registry.component';
import { UnderConstruction } from './components/underconstruction/under.construction';

export const appRoutes: Routes = [
  { path: '', component: Home },
  { path: 'login', component: Login },
  { path: 'regstry', component: RegistryComponent },
  { path: 'underConstruction', component: UnderConstruction },
  { path: 'activation', component: ActivationComponent },

];
