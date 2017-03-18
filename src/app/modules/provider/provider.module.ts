import { EditDialogComponent } from './components/editdialog/editdialog.component';
import { EditSiteComponent } from './components/editsite/editsite.component';
import { NgModule }       from '@angular/core';
import { CommonModule }   from '@angular/common';
import { RouterModule } from '@angular/router';
import { providerRoutes } from './provider.routes';
import { ProviderComponent } from './provider.component';
import { ProviderGuard } from './provider.guard';
import { MaterialModule } from '@angular/material';

import {SiteComponent } from './components/site/site.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(providerRoutes),
    MaterialModule.forRoot(),
  ],
  declarations: [
    SiteComponent,
    EditSiteComponent,
    EditDialogComponent,
    ProviderComponent,
  ],
  providers: [
    ProviderGuard,
  ],
})
export class ProviderModule {}
