import {Campaign} from '../../../../model/campaign';
import {EditInterface} from '../editdialog/editinterface';
import {DatePipe} from '@angular/common';
import {Component, ElementRef, Input, OnInit, ViewChild} from '@angular/core';
import {AbstractControl, NgForm} from '@angular/forms';

@Component({
  selector: 'app-editcampaign',
  templateUrl: './editcampaign.component.html',
  styleUrls: ['./editcampaign.component.css'],
})
export class EditCampaignComponent implements EditInterface, OnInit {

  @ViewChild('startDate') startDate: ElementRef;
  @ViewChild('endDate') endDate: ElementRef;
  @Input() campaign: Campaign;
  @ViewChild('f') form: NgForm;

  constructor() {
  }

  ngOnInit(): void {
    this.startDate.nativeElement.setAttribute('value', this.dateParse(this.campaign.startDate));
    this.endDate.nativeElement.setAttribute('value', this.dateParse(this.campaign.endDate));
  }

  valid(): boolean {
    return this.form && this.form.valid;
  }

  edit() {
    console.log('test');
  }

  dateParse(date: number): string {
    if (date) {
      return new DatePipe('en-US').transform(new Date(date), 'yyyy-MM-dd');
    } else {
      return null;
    }
  }

  parseDate(dateString: string): number {
    if (dateString) {
      return new Date(dateString).getTime();
    } else {
      return null;
    }
  }

  invalid(): void {
    for (const key in this.form.controls) {
      if (this.form.controls.hasOwnProperty(key)) {
        const control: AbstractControl = this.form.controls[key];
        control.markAsTouched();
      }
    }
  }

}
