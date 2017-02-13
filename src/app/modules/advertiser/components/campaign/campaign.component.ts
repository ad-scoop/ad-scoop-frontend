import { Campaign } from '../../../../model/campaign';
import { CampaignService } from '../../../../services/campaign.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { BannerComponent } from './../banner/banner.component';
import { SiteComponent } from './../site/site.component';

@Component({
  selector: 'app-campaign',
  templateUrl: './campaign.component.html',
  styleUrls: ['./campaign.component.css']
})
export class CampaignComponent implements OnInit {

  campaigns: Campaign[];

  constructor(private campaignService: CampaignService) {

  }

  ngOnInit() {
    this.campaignService.getCampaigns().subscribe(cam => this.campaigns = cam);
  }

}
