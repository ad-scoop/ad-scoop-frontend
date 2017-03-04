import { Campaign } from '../../../../model/campaign';
import { CampaignService } from '../../../../services/campaign.service';
import { EditCampaignComponent } from '../editcampaign/editcampaign.component';
import { EditDialogComponent } from '../editdialog/editdialog.component';
import { SearchsitesComponent } from '../searchsites/searchsites.component';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
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
        this.campaignService.remove(campaign)
          .subscribe(
          responce => this.ngOnInit(),
          error => { throw new Error('Fejl ved sletning af kampagner ' + error); });
        ;
      }
    });
  }

  public add(): void {
    let campaign = new Campaign('', new Date());
    this.openEditDialog(campaign, 'Opret').subscribe(result => {
      if (result) {
        this.campaignService.create(result)
          .subscribe(created => {
            if (created) {
              this.ngOnInit();
            }
          }
          );
      }
    });
  }

  public edit(campaign: Campaign): void {
    this.openEditDialog(campaign, 'Ændre').subscribe(result => {
      if (result) {
        this.campaignService.edit(result);
        this.ngOnInit();
      }
    });
  }

  private openEditDialog(campaign: Campaign, type: string): Observable<any> {
    let dialogRef = this.dialog.open(EditDialogComponent);
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
