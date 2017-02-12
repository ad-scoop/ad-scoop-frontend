import { NgModule }       from '@angular/core';
import { CommonModule }   from '@angular/common';
import { RouterModule } from '@angular/router';
import { providerRoutes } from './provider.routes';
import { ProviderComponent } from './provider.component';
import { ProviderGuard } from './provider.guard';

import { SitesComponent } from './components/sites/sites.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(providerRoutes),
  ],
  declarations: [
    SitesComponent,
    ProviderComponent,
  ],
  providers: [
    ProviderGuard,
  ],
})
export class ProviderModule {}
