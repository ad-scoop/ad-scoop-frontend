import { WebSite } from '../../../../model/site';
import { AlertService } from '../../../../services/alert.service';
import { SiteService } from '../../../../services/site.service';
import { EditDialogComponent } from '../editdialog/editdialog.component';
import { Component, OnInit } from '@angular/core';
import { MdDialog } from '@angular/material';
import { Observable } from 'rxjs';

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
    let site = new WebSite('', '', false);
    this.openEditDialog(site, 'Opret').subscribe(result => {
      if (result) {
        this.siteService.edit(result).subscribe(
          responce => {
            this.siteService.add(site);
            this.ngOnInit();
          },
          error => this.alertService.error(error));
      }
    });
  }

  private openEditDialog(site: WebSite, type: string): Observable<any> {
    let dialogRef = this.dialog.open(EditDialogComponent);
    dialogRef.componentInstance.site = site;
    return dialogRef.afterClosed();
  }

}
