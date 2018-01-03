import {Component} from '@angular/core';
import {MatIconRegistry} from '@angular/material';
import {DomSanitizer} from '@angular/platform-browser';
import {polyfill } from 'smoothscroll-polyfill';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ad-scoop';

  constructor(mdIconRegistry: MatIconRegistry, sanitizer: DomSanitizer) {
    polyfill();
    mdIconRegistry
      .addSvgIcon('banner', sanitizer.bypassSecurityTrustResourceUrl('/assets/images/create-banner-small.svg'))
      .addSvgIcon('campaigns', sanitizer.bypassSecurityTrustResourceUrl('/assets/images/campaigns-small.svg'));
  }

}
