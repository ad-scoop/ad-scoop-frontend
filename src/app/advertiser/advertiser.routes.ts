import { Routes } from '@angular/router';
import { Planning } from './components/planning/planning';
import { AdvertiserComponent } from './advertiser.component';
import { AdvertiserGuard } from './advertiser.guard';


export const advertiserRoutes: Routes = [
  { path: 'advertiser',
    component: AdvertiserComponent,
    canActivate: [AdvertiserGuard],
    children: [ {
               path: '',
               canActivateChild: [AdvertiserGuard],
               children: [
                   { path: 'planning', component: Planning },
               ]
        }
    ]
  }
];
