import { CachedWebsite } from '../../../../model/cachedwebsite';
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
import { MatDialog } from '@angular/material';
import { MatDialogRef, MatDialogConfig } from '@angular/material';

@Component({
  templateUrl: './confirmdialog.component.html',
})
export class ConfirmDialogComponent {

  public headline: string;
  public confirmation: string;

  constructor(public dialogRef: MatDialogRef<ConfirmDialogComponent>) { }

}

@Component({
  selector: 'app-campaign',
  templateUrl: './campaign.component.html',
  styleUrls: ['./campaign.component.css']
})
export class CampaignComponent implements OnInit {

  campaigns: Campaign[];
  cachedWebsite: CachedWebsite;

  constructor(
    public dialog: MatDialog,
    private campaignService: CampaignService,
    private alertService: AlertService,
    private siteService: SiteService) {
    this.cachedWebsite = new CachedWebsite(this.siteService);
  }

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
    return this.cachedWebsite.getWebSites(campaign);
  }

  private openEditDialog(campaign: Campaign, type: string): Observable<any> {
    const config = new MatDialogConfig();
    config.height = '80%';
    config.width = '70%';
    const dialogRef = this.dialog.open(EditDialogComponent, config);
    dialogRef.componentInstance.type = type;
    dialogRef.componentInstance.campaign = campaign;
    return dialogRef.afterClosed();
  }

}
