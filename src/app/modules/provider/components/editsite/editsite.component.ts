import {WebSite} from '../../../../model/site';
import {EditInterface} from '../editdialog/editinterface';
import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-editsite',
  templateUrl: './editsite.component.html',
  styleUrls: ['./editsite.component.css']
})
export class EditSiteComponent implements EditInterface, OnInit {

  @Input() site: WebSite;
  public url: string;

  constructor() {
  }

  ngOnInit(): void {
    this.url = this.site.url;
  }

  isNotSafe(): boolean {
    return !this.url || this.url.indexOf('https') === -1;
  }

  refresh(): void {
    this.url = this.addProtecol(this.url);
    this.site.url = this.url;
  }

  valid(): boolean {
    return true;
  }

  invalid(): void {

  }

  edit(): void {

  }

  private addProtecol(url: string): string {
    if (url && url.startsWith('http')) {
      return url;
    }
    return 'https://' + url;
  }

}
