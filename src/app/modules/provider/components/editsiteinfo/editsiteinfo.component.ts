import { Area } from '../../../../model/area';
import { Demografi } from '../../../../model/demografi';
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

  area: Area = new Area();

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

  addArea(): void {
    if (!this.site.areas) {
      this.site.areas = [];
    }
    this.site.areas.push(this.area);
    this.area = new Area();
  }

  removeArea(area: Area) {
    this.site.areas.splice(this.site.areas.indexOf(area), 1);
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
    return this.hasGender('Man');
  }

  set man(selected: boolean) {
    this.changeGender('Man');
  }

  get woman(): boolean {
    return this.hasGender('Woman');
  }

  set woman(selected: boolean) {
    this.changeGender('Woman');
  }

  get unisex(): boolean {
    return this.hasGender('Unisex');
  }

  set unisex(selected: boolean) {
    this.changeGender('Unisex');
  }

  get children(): boolean {
    return this.hasGender('Children');
  }

  set children(selected: boolean) {
    this.changeGender('Children');
  }

  private hasGender(gender: string): boolean {
    return this.site.demografi && this.site.demografi.genders && this.site.demografi.genders.indexOf(gender) > -1;
  }

  private changeGender(gender: string): void {
    if (!this.site.demografi) {
      this.site.demografi = new Demografi();
    }

    if (!this.site.demografi.genders) {
      this.site.demografi.genders = [];
    }

    if (this.site.demografi && this.site.demografi.genders.indexOf(gender) > -1) {
      this.site.demografi.genders.splice(this.site.demografi.genders.indexOf(gender), 1);
    } else {
      this.site.demografi.genders.push(gender);
    }
  }

}
