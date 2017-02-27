import { Campaign } from '../../../../model/campaign';
import { Site } from '../../../../model/site';
import { CampaignService } from '../../../../services/campaign.service';
import { EditInterface } from '../editdialog/editinterface';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-searchsites',
  templateUrl: './searchsites.component.html',
  styleUrls: ['./searchsites.component.css']
})
export class SearchsitesComponent implements EditInterface {

  @Input() campaign: Campaign;
  model: any = {};
  firstColName = 'Vælg';
  foudnsites: Site[] = [];
  serchedHeadeline = 'Fremsøgte hjemmesider';
  selectedHeadline = 'Valgte hjemmesider';
  removeColumn = true;

  addFunction = (site: Site) => {
    this.campaign.sites.push(site);
    this.foudnsites.splice(this.foudnsites.indexOf(site), 1);
  }

  removeFunction = (site: Site) => {
    this.campaign.sites.splice(this.campaign.sites.indexOf(site), 1);
  }

  constructor(private campaignService: CampaignService) { }

  search(): void {
    this.foudnsites = this.campaignService.serche(this.model);
  }

  valid(): boolean {
    return true;
  }

  invalid(): void {

  }

  edit(): void {

  }

}
