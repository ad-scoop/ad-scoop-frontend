import { Routes } from '@angular/router';
import { CampaignComponent } from './components/campaign/campaign.component';
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
                   { path: 'campaigns', component: CampaignComponent },
               ]
        }
    ]
  }
];
