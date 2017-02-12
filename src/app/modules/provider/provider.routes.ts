import { Routes } from '@angular/router';
import { SitesComponent } from './components/sites/sites.component';
import { ProviderComponent } from './provider.component';
import { ProviderGuard } from './provider.guard';


export const providerRoutes: Routes = [
  { path: 'provider',
    component: ProviderComponent,
    canActivate: [ProviderGuard],
    children: [ {
               path: '',
               canActivateChild: [ProviderGuard],
               children: [
                   { path: 'sites', component: SitesComponent },
               ]
        }
    ]
  }
];
