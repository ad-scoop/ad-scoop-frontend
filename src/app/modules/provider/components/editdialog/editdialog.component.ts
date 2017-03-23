import { EditInterface } from '../../../advertiser/components/editdialog/editinterface';
import { EditSiteComponent } from '../editsite/editsite.component';
import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { MdDialogRef } from '@angular/material';


enum SelectedStep {
  URL,
  INFO,
  BANNER
}

@Component({
  selector: 'app-editdialog',
  templateUrl: './editdialog.component.html',
  styleUrls: ['./editdialog.component.css']
})
export class EditDialogComponent implements OnInit {

  @Input() site;

  @ViewChild('editSite') editSite: EditSiteComponent;
  //  @ViewChild('editcampaign') editCampaign: EditCampaignComponent;
  //  @ViewChild('searchbanner') bannerUpload: BannerUploadComponent;

  private selectedStep = SelectedStep.URL;
  public selectedStepEnum = SelectedStep;

  constructor(public dialogRef: MdDialogRef<EditDialogComponent>) { }

  ngOnInit() {
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

  valid(): boolean {
    return this.findActive() && this.findActive().valid();
  }

  isNotFirstStep(): boolean {
    return this.selectedStep !== SelectedStep.URL;
  }

  private findActive(): EditInterface {
    if (SelectedStep.URL === this.selectedStep) {
      return this.editSite;
    } else if (SelectedStep.INFO === this.selectedStep) {
      return null;
    }
    return null;
  }

}
