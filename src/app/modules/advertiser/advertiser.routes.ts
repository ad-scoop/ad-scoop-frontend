import { Routes } from '@angular/router';
import { CampaignComponent } from './components/campaign/campaign.component';
import { AdvertiserComponent } from './advertiser.component';
import { AdvertiserGuard } from './advertiser.guard';
import { BannerDialogComponent } from './components/banner/banner.component'
import { ConfirmDialogComponent } from './components/confirmdialog/confirmdialog.component';


export const advertiserRoutes: Routes = [
  { path: 'advertiser',
    component: AdvertiserComponent,
    canActivate: [AdvertiserGuard],
    children: [ {
               path: '',
               canActivateChild: [AdvertiserGuard],
               children: [
                   { path: 'campaigns', component: CampaignComponent },
                   { path: 'confirm', component: ConfirmDialogComponent },
                   { path: 'bannder', component: BannerDialogComponent },
               ]
        }
    ]
  }
];
