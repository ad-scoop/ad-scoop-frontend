import { Campaign } from '../../../../model/campaign';
import { WebSite } from '../../../../model/site';
import { WebSiteSearchCriteria } from '../../../../model/websitesearchcriteria';
import { AlertService } from '../../../../services/alert.service';
import { CampaignService } from '../../../../services/campaign.service';
import { SiteService } from '../../../../services/site.service';
import { EditCampaignComponent } from '../editcampaign/editcampaign.component';
import { EditDialogComponent } from '../editdialog/editdialog.component';
import { SearchsitesComponent } from '../searchsites/searchsites.component';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { BannerComponent } from './../banner/banner.component';
import { SiteComponent } from './../site/site.component';
import { MdDialog } from '@angular/material';
import { MdDialogRef, MdDialogConfig } from '@angular/material';

@Component({
  selector: 'app-campaign',
  templateUrl: './campaign.component.html',
  styleUrls: ['./campaign.component.css']
})
export class CampaignComponent implements OnInit {

  campaigns: Campaign[];

  constructor(
    public dialog: MdDialog,
    private campaignService: CampaignService,
    private alertService: AlertService,
    private siteService: SiteService) { }

  ngOnInit() {
    this.campaignService.getCampaigns().subscribe(cam => this.campaigns = cam);
  }

  public remove(campaign: Campaign): void {
    const dialogRef = this.dialog.open(ConfirmDialogComponent);
    dialogRef.componentInstance.headline = 'Slet kampagne';
    dialogRef.componentInstance.confirmation = 'Er du sikker?';
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.campaignService.remove(campaign).subscribe(
          responce => this.ngOnInit(),
          error => this.alertService.error(error));
      }
    });
  }

  public add(): void {
    const campaign = new Campaign(new Date().valueOf());
    this.openEditDialog(campaign, 'Opret').subscribe(result => {
      if (result) {
        this.campaignService.add(result).subscribe(
          responce => this.ngOnInit(),
          error => this.alertService.error(error));
      }
    });
  }

  public edit(campaign: Campaign): void {
    this.openEditDialog(campaign, 'Ændre').subscribe(result => {
      if (result) {
        this.campaignService.edit(result).subscribe(
          responce => this.ngOnInit(),
          error => this.alertService.error(error));
      }
    });
  }

  webSites(campaign: Campaign): WebSite[] {
    let result = [];
    const searchFor = new WebSiteSearchCriteria();
    searchFor.ids = campaign.webSiteIds;
    this.siteService.serche(searchFor)
      .subscribe(r => result = r);
    return result;
  }

  private openEditDialog(campaign: Campaign, type: string): Observable<any> {
    const dialogRef = this.dialog.open(EditDialogComponent);
    dialogRef.componentInstance.type = type;
    dialogRef.componentInstance.campaign = campaign;
    return dialogRef.afterClosed();
  }

}

@Component({
  templateUrl: './confirmdialog.component.html',
})
export class ConfirmDialogComponent {

  public headline: string;
  public confirmation: string;

  constructor(public dialogRef: MdDialogRef<ConfirmDialogComponent>) { }

}
