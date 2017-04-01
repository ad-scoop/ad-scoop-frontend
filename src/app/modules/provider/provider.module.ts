import { EditDialogComponent } from './components/editdialog/editdialog.component';
import { EditSiteComponent } from './components/editsite/editsite.component';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { providerRoutes } from './provider.routes';
import { ProviderComponent } from './provider.component';
import { ProviderGuard } from './provider.guard';
import { MaterialModule } from '@angular/material';
import { UrlSafePipe } from '../../utils/urlsafe.pipe';
import { EditSiteInfoComponent } from './components/editsiteinfo/editsiteinfo.component';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { SiteComponent } from './components/site/site.component';
import { FoucsDirective } from './utils/foucs.directive';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(providerRoutes),
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  declarations: [
    FoucsDirective,
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
export class ProviderModule { }
