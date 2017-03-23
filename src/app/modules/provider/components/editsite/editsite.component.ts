import { WebSite } from '../../../../model/site';
import { EditDialogComponent } from '../editdialog/editdialog.component';
import { EditInterface } from '../editdialog/editinterface';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-editsite',
  templateUrl: './editsite.component.html',
  styleUrls: ['./editsite.component.css']
})
export class EditSiteComponent implements EditInterface {

  @Input() site: WebSite;

  constructor() { }

  valid(): boolean {
    return true;
  }

  invalid(): void {

  }

  edit(): void {

  }

}
