import { BannerNode } from '../../../../model/bannerNode';
import { Component, OnInit, Input } from '@angular/core';
import { MdDialogRef, MdDialog } from '@angular/material';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent {

  @Input() banners: BannerNode[];

  constructor(public dialog: MdDialog) { }

  openDialog(banner: BannerNode) {
    let dialogRef = this.dialog.open(BannerDialogComponent);
    dialogRef.componentInstance.banner = banner;
  }

}

@Component({
  templateUrl: './banner.dialog.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerDialogComponent {

  @Input() banner: BannerNode;

  constructor(public dialogRef: MdDialogRef<BannerDialogComponent>) { }

}
