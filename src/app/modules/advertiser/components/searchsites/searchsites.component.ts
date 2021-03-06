import {CachedWebsite} from '../../../../model/cachedwebsite';
import {Campaign} from '../../../../model/campaign';
import {Industry} from '../../../../model/industry';
import {WebSite} from '../../../../model/site';
import {WebSiteSearchCriteria} from '../../../../model/websitesearchcriteria';
import {CampaignService} from '../../../../services/campaign.service';
import {SiteService} from '../../../../services/site.service';
import {EditInterface} from '../editdialog/editinterface';
import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-searchsites',
  templateUrl: './searchsites.component.html',
  styleUrls: ['./searchsites.component.css']
})
export class SearchsitesComponent implements EditInterface {

  @Input() campaign: Campaign;
  industries: Industry[];
  model: WebSiteSearchCriteria = new WebSiteSearchCriteria();
  firstColName = 'Vælg';
  foundsites: WebSite[] = [];
  serchedHeadeline = 'Fremsøgte hjemmesider';
  selectedHeadline = 'Valgte hjemmesider';
  selectSubtitle = 'Tryk på plusset for at tilføje fremsøgte websites';
  removeColumn = true;
  doNotHide = '';
  selectedIndustry;
  cachedWebsite: CachedWebsite;

  addFunction = (site: WebSite) => {
    if (!this.campaign.webSiteIds) {
      this.campaign.webSiteIds = [];
    }
    this.cachedWebsite.clear();
    this.campaign.webSiteIds.push(site.id);
    this.foundsites.splice(this.foundsites.indexOf(site), 1);
  }

  removeFunction = (site: WebSite) => {
    this.cachedWebsite.clear();
    this.campaign.webSiteIds.splice(this.campaign.webSiteIds.indexOf(site.id), 1);
  }

  constructor(private campaignService: CampaignService,
              private siteService: SiteService) {
    this.industries = siteService.industries;
    this.cachedWebsite = new CachedWebsite(this.siteService);
  }

  search(): void {
    this.siteService.serche(this.model).subscribe(list => this.foundsites = list);
  }

  valid(): boolean {
    return true;
  }

  invalid(): void {

  }

  edit(): void {

  }

  webSites(campaign: Campaign): WebSite[] {
    return this.cachedWebsite.getWebSites(campaign);
  }

  get categories(): string[] {
    if (this.selectedIndustry) {
      return this.selectedIndustry.categoris;
    }
    return [];
  }

}
