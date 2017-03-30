import { EditDialogComponent } from './components/editdialog/editdialog.component';
import { EditSiteComponent } from './components/editsite/editsite.component';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule }   from '@angular/common';
import { RouterModule } from '@angular/router';
import { providerRoutes } from './provider.routes';
import { ProviderComponent } from './provider.component';
import { ProviderGuard } from './provider.guard';
import { MaterialModule } from '@angular/material';
import { UrlSafePipe } from '../../utils/urlsafe.pipe';
import { EditSiteInfoComponent } from './components/editsiteinfo/editsiteinfo.component';

import {SiteComponent } from './components/site/site.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(providerRoutes),
    MaterialModule.forRoot(),
    FormsModule,
  ],
  declarations: [
    SiteComponent,
    EditSiteComponent,
    EditDialogComponent,
    ProviderComponent,
    UrlSafePipe,
    EditSiteInfoComponent,
  ],
  providers: [
    ProviderGuard,
  ],
})
export class ProviderModule {}
