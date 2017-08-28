import { Routes } from '@angular/router';
import { CampaignComponent, ConfirmDialogComponent } from './components/campaign/campaign.component';
import { AdvertiserComponent } from './advertiser.component';
import { AdvertiserGuard } from './advertiser.guard';
import { HomeComponent } from './components/home/home.component';
import { BannerDialogComponent } from './components/banner/banner.component';
import { EditDialogComponent } from './components/editdialog/editdialog.component';


export const advertiserRoutes: Routes = [
  { path: 'advertiser',
    component: AdvertiserComponent,
    canActivate: [AdvertiserGuard],
    children: [ {
               path: '',
               canActivateChild: [AdvertiserGuard],
               children: [
                   { path: 'home', component: HomeComponent },
                   { path: 'campaigns', component: CampaignComponent },
                   { path: 'confirm', component: ConfirmDialogComponent },
                   { path: 'edit', component: EditDialogComponent },
                   { path: 'bannder', component: BannerDialogComponent },
               ]
        }
    ]
  }
];
