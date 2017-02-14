import { Site } from '../../../../model/site';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-site',
  templateUrl: './site.component.html',
  styleUrls: ['./site.component.css']
})
export class SiteComponent implements OnInit {

  @Input() sites: Site[];


  constructor() { }

  ngOnInit() {
  }

}
