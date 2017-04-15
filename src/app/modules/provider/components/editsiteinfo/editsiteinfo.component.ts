import { Gender } from '../../../../model/gender';
import { Industry } from '../../../../model/industry';
import { WebSite } from '../../../../model/site';
import { SiteService } from '../../../../services/site.service';
import { EditInterface } from '../editdialog/editinterface';
import { Component, Input, ViewChild, ElementRef } from '@angular/core';
import { FormControl } from '@angular/forms';
import 'rxjs/add/operator/startWith';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-editsiteinfo',
  templateUrl: './editsiteinfo.component.html',
  styleUrls: ['./editsiteinfo.component.css']
})
export class EditSiteInfoComponent implements EditInterface {

  @ViewChild('label') label: ElementRef;

  stateCtrl: FormControl;
  filteredCountry: any;

  @Input() site: WebSite;
  industries: Industry[];

  constructor(private siteService: SiteService) {
    this.stateCtrl = new FormControl();
    this.filteredCountry = this.stateCtrl.valueChanges
      .startWith(null)
      .map(name => this.filterCountries(name));
    this.industries = siteService.industries;
  }

  filterCountries(val: string) {
    return val ? this.siteService.countries.filter((s) => new RegExp(val, 'gi').test(s)) : null;
  }

  valid(): boolean {
    return true;
  }

  invalid(): void {

  }

  edit(): void {

  }

  add(value: string): void {
    this.site.labels.push(value);
    this.label.nativeElement.value = '';
    this.label.nativeElement.focus();
  }

  remove(value: string): void {
    this.site.labels.splice(this.site.labels.indexOf(value), 1);
  }

  get categories(): string[] {
    if (this.selectedIndustry) {
      return this.selectedIndustry.categoris;
    }
    return [];
  }

  get selectedIndustry(): Industry {
    return this.industries.find(i => i.name === this.site.organisation.type);
  }

  set selectedIndustry(industry: Industry) {
    this.site.organisation.type = industry.name;
  }

  get man(): boolean {
    return this.hasGender(Gender.Man);
  }

  set man(selected: boolean) {
    this.changeGender(Gender.Man);
  }

  get woman(): boolean {
    return this.hasGender(Gender.Woman);
  }

  set woman(selected: boolean) {
    this.changeGender(Gender.Woman);
  }

  get unisex(): boolean {
    return this.hasGender(Gender.Unisex);
  }

  set unisex(selected: boolean) {
    this.changeGender(Gender.Unisex);
  }

  get children(): boolean {
    return this.hasGender(Gender.Children);
  }

  set children(selected: boolean) {
    this.changeGender(Gender.Children);
  }

  private hasGender(gender: Gender): boolean {
    return this.site.demografi.gender.indexOf(gender) > -1;
  }

  private changeGender(gender: Gender): void {
    if (this.site.demografi.gender.indexOf(gender) > 0) {
      this.site.demografi.gender.splice(this.site.demografi.gender.indexOf(gender), 1);
    } else {
      this.site.demografi.gender.push(gender);
    }
  }

}
