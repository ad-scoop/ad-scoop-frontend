import { EditDialogComponent } from './components/editdialog/editdialog.component';
import { HomeComponent } from './components/home/home.component';
import { Routes } from '@angular/router';
import { SiteComponent } from './components/site/site.component';
import { ProviderComponent } from './provider.component';
import { ProviderGuard } from './provider.guard';


export const providerRoutes: Routes = [
  {
    path: 'provider',
    component: ProviderComponent,
    canActivate: [ProviderGuard],
    children: [{
      path: '',
      canActivateChild: [ProviderGuard],
      children: [
        { path: 'home', component: HomeComponent },
        { path: 'site', component: SiteComponent },
        { path: 'edit', component: EditDialogComponent },
      ]
    }
    ]
  }
];
