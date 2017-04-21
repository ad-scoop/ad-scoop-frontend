import { Campaign } from '../../../../model/campaign';
import { BannerUploadComponent } from '../bannerupload/bannerupload.component';
import { EditCampaignComponent } from '../editcampaign/editcampaign.component';
import { SearchsitesComponent } from '../searchsites/searchsites.component';
import { EditInterface } from './editinterface';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MdDialogRef } from '@angular/material';

enum SelectedStep {
  CAMPAIGN,
  BANNER,
  SITES,
  BANNER_SITE
}

@Component({
  templateUrl: './editdialog.component.html',
  styleUrls: ['./editdialog.component.css'],
})
export class EditDialogComponent {

  @ViewChild('searchsites') searchsites: SearchsitesComponent;
  @ViewChild('editcampaign') editCampaign: EditCampaignComponent;
  @ViewChild('searchbanner') bannerUpload: BannerUploadComponent;

  private _campaign: Campaign;

  public type: string;
  public selectedStep: SelectedStep = SelectedStep.CAMPAIGN;

  public selectedStepEnum = SelectedStep;

  constructor(public dialogRef: MdDialogRef<EditDialogComponent>) { }

  get campaign(): Campaign {
    return this._campaign;
  }

  set campaign(campaign: Campaign) {
    this._campaign = JSON.parse(JSON.stringify(campaign));
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
    this.dialogRef.close(this._campaign);
  }

  valid(): boolean {
    return this.findActive() && this.findActive().valid();
  }

  isNotFirstStep(): boolean {
    return this.selectedStep !== SelectedStep.CAMPAIGN;
  }

  isLastStep(): boolean {
    return this.selectedStep === SelectedStep.BANNER_SITE;
  }

  private findActive(): EditInterface {
    if (SelectedStep.CAMPAIGN === this.selectedStep) {
      return this.editCampaign;
    } else if (SelectedStep.BANNER === this.selectedStep) {
      return this.bannerUpload;
    } else if (SelectedStep.BANNER_SITE === this.selectedStep) {

    }
    return this.searchsites;
  }

}
