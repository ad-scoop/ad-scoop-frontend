import { WebSite } from '../../../../model/site';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-site',
  templateUrl: './site.component.html',
  styleUrls: ['./site.component.css']
})
export class SiteComponent {

  @Input() sites: WebSite[];
  @Input() showclicks = true;
  @Input() hideSmall = 'hideSmall';
  @Input() firstColName = '';
  @Input() headline = 'Hjemmesider';
  @Input() clickFunction: ClickFunction;
  @Input() removeColumn = false;

  constructor() {
  }

  click(site: WebSite) {
    this.clickFunction(site);
  }

  getZip(site: WebSite): String {
    if (site.area) {
      return site.area.zip;
    }
    return '';
  }

  getIndustry(site: WebSite): String {
    if (site.organisation) {
      return site.organisation.type;
    }
    return '';
  }

}

type ClickFunction = (site: WebSite) => void;

