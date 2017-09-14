import { ActivationComponent } from './components/activation/activation.component';
import { Routes } from '@angular/router';
import { Home } from './components/home/home';
import { LoginComponent, ProfileDialogComponent } from './components/login/login.component';
import { RegistryComponent } from './components/registry/registry.component';
import { UnderConstruction } from './components/underconstruction/under.construction';

export const appRoutes: Routes = [
  { path: '', component: Home },
  { path: 'login', component: LoginComponent },
  { path: 'regstry', component: RegistryComponent },
  { path: 'underConstruction', component: UnderConstruction },
  { path: 'activation', component: ActivationComponent },
  { path: 'profile', component: ProfileDialogComponent },

];
