import { Gender } from '../../../../model/gender';
import { WebSite } from '../../../../model/site';
import { AlertService } from '../../../../services/alert.service';
import { SiteService } from '../../../../services/site.service';
import { EditDialogComponent } from '../editdialog/editdialog.component';
import { Component, OnInit } from '@angular/core';
import { MdDialog } from '@angular/material';
import { Observable } from 'rxjs/Observable';

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
    public dialog: MdDialog) { }

  ngOnInit() {
    this.siteService
      .sites()
      .subscribe(sites => this.sites = sites);
  }

  remove(site: WebSite): void {

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

  add(): void {
    const site = new WebSite('', '', false);
    this.openEditDialog(site, 'Opret').subscribe(result => {
      if (result) {
        this.siteService.add(result).subscribe(
          responce =>
            this.ngOnInit(),
          error => this.alertService.error(error));
      }
    });
  }

  public genderStr(gender: Gender[]): string {
    if (gender) {
      return gender
        .map(gen => this.genderConvert(gen))
        .join(', ');
    }
    return '';
  }

  private genderConvert(gender: Gender): string {
    switch (gender) {
      case Gender.Man: return 'Mænd';
      case Gender.Woman: return 'Kvinder';
      case Gender.Unisex: return 'Unisex';
      case Gender.Children: return 'Børn';
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
