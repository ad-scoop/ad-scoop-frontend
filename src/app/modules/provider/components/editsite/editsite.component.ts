import { WebSite } from '../../../../model/site';
import { EditDialogComponent } from '../editdialog/editdialog.component';
import { EditInterface } from '../editdialog/editinterface';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-editsite',
  templateUrl: './editsite.component.html',
  styleUrls: ['./editsite.component.css']
})
export class EditSiteComponent implements EditInterface, OnInit {

  @Input() site: WebSite;
  public url: string;

  constructor() { }

  ngOnInit(): void {
    this.url = this.site.url;
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
