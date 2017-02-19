import { Campaign } from '../../../../model/campaign';
import { CampaignService } from '../../../../services/campaign.service';
import { ConfirmDialogComponent } from '../confirmdialog/confirmdialog.component';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { BannerComponent } from './../banner/banner.component';
import { SiteComponent } from './../site/site.component';
import { MdDialog } from '@angular/material';

@Component({
  selector: 'app-campaign',
  templateUrl: './campaign.component.html',
  styleUrls: ['./campaign.component.css']
})
export class CampaignComponent implements OnInit {

  campaigns: Campaign[];

  constructor(
    public dialog: MdDialog,
    private campaignService: CampaignService) { }

  ngOnInit() {
    this.campaignService.getCampaigns().subscribe(cam => this.campaigns = cam);
  }

  public remove(campaign: Campaign): void {
    let dialogRef = this.dialog.open(ConfirmDialogComponent);
    dialogRef.componentInstance.headline = 'Slet kampagne';
    dialogRef.componentInstance.confirmation = 'Er du sikker?';
    dialogRef.afterClosed().subscribe(result => {
      if (result === 'true') {
        this.campaignService.remove(campaign);
        this.ngOnInit();
      }
    });
  }

}
