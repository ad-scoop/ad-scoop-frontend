import { Campaign } from '../../../../model/campaign';
import { Industry } from '../../../../model/industry';
import { WebSite } from '../../../../model/site';
import { WebSiteSearchCriteria } from '../../../../model/websitesearchcriteria';
import { CampaignService } from '../../../../services/campaign.service';
import { SiteService } from '../../../../services/site.service';
import { EditInterface } from '../editdialog/editinterface';
import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs/Observable';

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
  removeColumn = true;
  doNotHide = '';

  addFunction = (site: WebSite) => {
    if (!this.campaign.webSiteIds) {
      this.campaign.webSiteIds = [];
    }
    this.campaign.webSiteIds.push(site.id);
    this.foundsites.splice(this.foundsites.indexOf(site), 1);
  }

  removeFunction = (site: WebSite) => {
    this.campaign.webSiteIds.splice(this.campaign.webSiteIds.indexOf(site.id), 1);
  }

  constructor(
    private campaignService: CampaignService,
    private siteService: SiteService) {
    this.industries = siteService.industries;
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
    let result = [];
    const searchFor = new WebSiteSearchCriteria();
    searchFor.ids = campaign.webSiteIds;
    this.siteService.serche(searchFor)
      .subscribe(r => result = r);
    return result;
  }

  get categories(): string[] {
    if (this.selectedIndustry) {
      return this.selectedIndustry.categoris;
    }
    return [];
  }

  get selectedIndustry(): Industry {
    return this.industries.find(i => i.name === this.model.organisationCategory);
  }

  set selectedIndustry(industry: Industry) {
    this.model.organisationCategory = industry.name;
  }

}
