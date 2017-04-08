import { WebSite } from '../../../../model/site';
import { EditInterface } from '../../../advertiser/components/editdialog/editinterface';
import { BannerComponent } from '../banner/banner.component';
import { EditSiteComponent } from '../editsite/editsite.component';
import { EditSiteInfoComponent } from '../editsiteinfo/editsiteinfo.component';
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
export class EditDialogComponent {

  private _site: WebSite;

  @ViewChild('editSite') editSite: EditSiteComponent;
  @ViewChild('editsiteinfo') editsiteinfo: EditSiteInfoComponent;
  @ViewChild('banner') banner: BannerComponent;

  public type: string;
  private selectedStep = SelectedStep.URL;
  public selectedStepEnum = SelectedStep;

  constructor(public dialogRef: MdDialogRef<EditDialogComponent>) { }

  get site(): WebSite {
    return this._site;
  }

  set site(site: WebSite) {
    this._site = JSON.parse(JSON.stringify(site));
  }

  edit(): void {
    this.dialogRef.close(this._site);
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

  isBannerStep(): boolean {
    return this.selectedStep === SelectedStep.BANNER;
  }

  private findActive(): EditInterface {
    if (SelectedStep.URL === this.selectedStep) {
      return this.editSite;
    } else if (SelectedStep.INFO === this.selectedStep) {
      return this.editsiteinfo;
    }
    return this.banner;
  }

}
