import { Banner } from '../../../../model/bannerNode';
import { Component, OnInit, Input } from '@angular/core';
import { MdDialogRef, MdDialog } from '@angular/material';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent {

  @Input() banners: Banner[];

  constructor(public dialog: MdDialog) { }

  openDialog(banner: Banner) {
    let dialogRef = this.dialog.open(BannerDialogComponent);
    dialogRef.componentInstance.banner = banner;
  }

}

@Component({
  templateUrl: './banner.dialog.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerDialogComponent {

  @Input() banner: Banner;

  constructor(public dialogRef: MdDialogRef<BannerDialogComponent>) { }

}
