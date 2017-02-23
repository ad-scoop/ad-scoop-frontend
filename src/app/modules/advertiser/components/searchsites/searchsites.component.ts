import { Campaign } from '../../../../model/campaign';
import { Site } from '../../../../model/site';
import { CampaignService } from '../../../../services/campaign.service'
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-searchsites',
  templateUrl: './searchsites.component.html',
  styleUrls: ['./searchsites.component.css']
})
export class SearchsitesComponent {

  @Input() campaign: Campaign;
  model: any = {};
  firstColName = 'Vælg';
  foudnsites: Site[] = [];
  selectedsites: Site[] = [];
  serchedHeadeline = 'Fremsøgte hjemmesider';
  selectedHeadline = 'Valgte hjemmesider';

  addFunction = (site: Site) => {
    this.selectedsites.push(site);
    this.foudnsites.splice(this.foudnsites.indexOf(site), 1);
  }

  removeFunction = (site: Site) => {
    this.selectedsites.splice(this.selectedsites.indexOf(site), 1);
  }

  constructor(private campaignService: CampaignService) { }

  search(): void {
    this.foudnsites = this.campaignService.serche(this.model);
  }

}
