import { Campaign } from '../../../../model/campaign';
import { EditInterface } from '../editdialog/editinterface';
import { Component, Input, ViewChild, OnInit, ElementRef } from '@angular/core';
import { NgForm, AbstractControl } from '@angular/forms';
import { MdDialogRef } from '@angular/material';

@Component({
  selector: 'app-editcampaign',
  templateUrl: './editcampaign.component.html',
  styleUrls: ['./editcampaign.component.css'],
})
export class EditCampaignComponent implements EditInterface {

  @Input() campaign: Campaign;
  @ViewChild('f') form: NgForm;

  constructor() { }

  valid(): boolean {
    return this.form && this.form.valid;
  }

  edit() {
    console.log('test');
  }

  parseDate(dateString: string): number {
    if (dateString) {
      return new Date(dateString).getTime();
    } else {
      return null;
    }
  }

  invalid(): void {
    for (let key in this.form.controls) {
      if (this.form.controls.hasOwnProperty(key)) {
        let control: AbstractControl = this.form.controls[key];
        control.markAsTouched();
      }
    }
  }

}
