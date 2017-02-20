import { Campaign } from '../../../../model/campaign'
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-editcampaign',
  templateUrl: './editcampaign.component.html',
  styleUrls: ['./editcampaign.component.css']
})
export class EditCampaignComponent {

  @Input() campaign: Campaign;

  constructor() {

  }

  edit() {

  }

}
