import { Campaign } from '../../../../model/campaign'
import { EditDialogComponent } from '../campaign/campaign.component'
import { Component, Input } from '@angular/core';
import { MdDialogRef } from '@angular/material'

@Component({
  selector: 'app-editcampaign',
  templateUrl: './editcampaign.component.html',
  styleUrls: ['./editcampaign.component.css'],
})
export class EditCampaignComponent {

  @Input() campaign: Campaign;

  constructor() {

  }

  edit() {

  }

}
