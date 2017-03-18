import { WebSite } from '../../../../model/site';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-editsite',
  templateUrl: './editsite.component.html',
  styleUrls: ['./editsite.component.css']
})
export class EditSiteComponent implements OnInit {

  @Input() site: WebSite;

  constructor() { }

  ngOnInit() {
  }

}
