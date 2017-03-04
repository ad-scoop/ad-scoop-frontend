import { Campaign } from '../../../../model/campaign';
import { EditInterface } from '../editdialog/editinterface';
import { Component, Input, ViewChild, OnInit } from '@angular/core';
import { NgForm, AbstractControl } from '@angular/forms';
import { MdDialogRef } from '@angular/material';

@Component({
  selector: 'app-editcampaign',
  templateUrl: './editcampaign.component.html',
  styleUrls: ['./editcampaign.component.css'],
})
export class EditCampaignComponent implements EditInterface, OnInit {

  @Input() campaign: Campaign;
  model: any = {};
  @ViewChild('f') form: NgForm;

  constructor() { }

  ngOnInit(): void {
    this.model = this.campaign;
  }

  valid(): boolean {
    return this.form && this.form.valid;
  }

  edit() {
    console.log('test');
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
