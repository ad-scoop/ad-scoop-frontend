import { NgModule }       from '@angular/core';
import { CommonModule }   from '@angular/common';
import { RouterModule } from '@angular/router';
import { advertiserRoutes } from './advertiser.routes';
import { AdvertiserComponent } from './advertiser.component';
import { AdvertiserGuard } from './advertiser.guard';

import { Planning } from './components/planning/planning';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(advertiserRoutes),
  ],
  declarations: [
    Planning,
    AdvertiserComponent,
  ],
  providers: [
    AdvertiserGuard,
  ],
})
export class AdvertiserModule {}