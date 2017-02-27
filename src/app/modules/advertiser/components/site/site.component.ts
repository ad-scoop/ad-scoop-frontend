import { Site } from '../../../../model/site';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-site',
  templateUrl: './site.component.html',
  styleUrls: ['./site.component.css']
})
export class SiteComponent {

  @Input() sites: Site[];
  @Input() showclicks = true;
  @Input() hideSmall = 'hideSmall';
  @Input() firstColName = '';
  @Input() headline = 'Hjemmesider';
  @Input() clickFunction: ClickFunction;
  @Input() removeColumn = false;

  constructor() {
  }

  click(site: Site) {
    this.clickFunction(site);
  }

}

type ClickFunction = (site: Site) => void;

