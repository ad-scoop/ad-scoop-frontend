import { Campaign } from '../../../../model/campaign';
import { CampaignService } from '../../../../services/campaign.service';
import { EditCampaignComponent } from '../editcampaign/editcampaign.component';
import { SearchsitesComponent } from '../searchsites/searchsites.component';
import { EditInterface } from './editinterface';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MdDialogRef } from '@angular/material';

enum SelectedStep {
  CAMPAIGN = 1,
  SITES = 2,
  BANNER = 3
}

@Component({
  templateUrl: './editdialog.component.html',
  styleUrls: ['./editdialog.component.css'],
})
export class EditDialogComponent {

  @ViewChild('searchsites') searchsites: SearchsitesComponent;
  @ViewChild('editcampaign') editCampaign: EditCampaignComponent;

  private _campaign: Campaign;
  private originalCampaign: Campaign;
  public type: string;
  public selectedStep: SelectedStep = SelectedStep.CAMPAIGN;

  constructor(public dialogRef: MdDialogRef<EditDialogComponent>, private campaignService: CampaignService) { }

  get campaign(): Campaign {
    return this._campaign;
  }

  set campaign(campaign: Campaign) {
    this.originalCampaign = campaign;
    this._campaign = JSON.parse(JSON.stringify(this.originalCampaign));
  }

  next(): void {
    if (this.valid()) {
      this.selectedStep = this.selectedStep + 1;
    } else {
      this.findActive().invalid();
    }
  }

  back(): void {
    this.selectedStep = this.selectedStep - 1;
  }

  edit(): void {
    this.campaignService.edit(this._campaign);
    this.dialogRef.close();
  }

  valid(): boolean {
    return this.findActive() && this.findActive().valid();
  }

  private findActive(): EditInterface {
    if (SelectedStep.CAMPAIGN === this.selectedStep) {
      return this.editCampaign;
    }
    return this.searchsites;
  }

}
