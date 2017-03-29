import { WebSite } from '../../../../model/site';
import { SiteService } from '../../../../services/site.service';
import { EditInterface } from '../editdialog/editinterface';
import { Component, Input } from '@angular/core';
import {FormControl} from '@angular/forms';
import 'rxjs/add/operator/startWith';

@Component({
  selector: 'app-editsiteinfo',
  templateUrl: './editsiteinfo.component.html',
  styleUrls: ['./editsiteinfo.component.css']
})
export class EditSiteInfoComponent implements EditInterface {

  stateCtrl: FormControl;
  filteredStates: any;

  @Input() site: WebSite;

  constructor(private siteServcie: SiteService) {
    this.stateCtrl = new FormControl();
    this.filteredStates = this.stateCtrl.valueChanges
      .startWith(null)
      .map(name => this.filterStates(name));
  }

  filterStates(val: string) {
    return val ? this.counties.filter((s) => new RegExp(val, 'gi').test(s)) : this.counties;
  }

  get counties(): string[] {
    return this.siteServcie.countries;
  }

  valid(): boolean {
    return true;
  }

  invalid(): void {

  }

  edit(): void {

  }

}
