import {WebSite} from '../../../../model/site';
import {AlertService} from '../../../../services/alert.service';
import {SiteService} from '../../../../services/site.service';
import {EditDialogComponent} from '../editdialog/editdialog.component';
import {Component, OnInit} from '@angular/core';
import {MdDialog} from '@angular/material';
import {Observable} from 'rxjs/Observable';

@Component({
  selector: 'app-site',
  templateUrl: './site.component.html',
  styleUrls: ['./site.component.css']
})
export class SiteComponent implements OnInit {

  sites: WebSite[] = [];

  constructor(
    private siteService: SiteService,
    private alertService: AlertService,
    public dialog: MdDialog) {}

  ngOnInit() {
    this.siteService
      .sites()
      .subscribe(sites => this.sites = sites);
  }

  isNotSafe(site: WebSite): boolean {
    return !site.url || site.url.indexOf('https') === -1;
  }

  remove(site: WebSite): void {
    this.siteService
      .remove(site).subscribe(
      responce => this.ngOnInit(),
      error => this.alertService.error(error));
  }

  edit(site: WebSite): void {
    this.openEditDialog(site, 'Ændre').subscribe(result => {
      if (result) {
        this.siteService.edit(result).subscribe(
          responce => this.ngOnInit(),
          error => this.alertService.error(error));
      }
    });
  }

  countries(site: WebSite): string {
    if (site.areas && site.areas.length > 0) {
      return site.areas.map(e => e.country).filter(this.isEmpty).join(' ');
    }
    return '';
  }

  labels(site: WebSite): string {
    if (site.areas && site.areas.length > 0) {
      return site.labels.join(' ');
    }
    return '';
  }

  region(site: WebSite): string {
    if (site.areas && site.areas.length > 0) {
      return site.areas.map(e => e.region).filter(this.isEmpty).join(' ');
    }
    return '';
  }

  cities(site: WebSite): string {
    if (site.areas && site.areas.length > 0) {
      return site.areas.map(e => e.city).filter(this.isEmpty).join(' ');
    }
    return '';
  }

  private isEmpty = (e: string) => {
    return e !== null || e !== undefined || e !== '';
  }

  add(): void {
    const site = new WebSite('', false);
    this.openEditDialog(site, 'Opret').subscribe(result => {
      if (result) {
        this.siteService.add(result).subscribe(
          responce =>
            this.ngOnInit(),
          error => this.alertService.error(error));
      }
    });
  }

  public genderStr(site: WebSite): string {
    if (site.demografi && site.demografi.genders) {
      return site.demografi.genders
        .map(gen => this.genderConvert(gen))
        .join(', ');
    }
    return '';
  }

  minAge(site: WebSite): string {
    if (site.demografi && site.demografi.minAge) {
      return site.demografi.minAge.toString();
    }
    return '-';
  }

  maxAge(site: WebSite): string {
    if (site.demografi && site.demografi.maxAge) {
      return site.demografi.maxAge.toString();
    }
    return '-';
  }

  private genderConvert(gender: string): string {
    switch (gender) {
      case 'Man': return 'Mænd';
      case 'Woman': return 'Kvinder';
      case 'Unisex': return 'Unisex';
      case 'Children': return 'Børn';
    }
    return '';
  }

  private openEditDialog(site: WebSite, type: string): Observable<any> {
    const dialogRef = this.dialog.open(EditDialogComponent);
    dialogRef.componentInstance.site = site;
    dialogRef.componentInstance.type = type;
    return dialogRef.afterClosed();
  }

}
