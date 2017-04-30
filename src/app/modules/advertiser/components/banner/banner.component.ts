import { Banner } from '../../../../model/banner';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { MdDialogRef, MdDialog } from '@angular/material';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent {

  @Input() banners: Banner[];

  @Input() showDialog = false;

  @Output() selectBanner: EventEmitter<any> = new EventEmitter();

  selectedBanner: Banner;

  constructor(public dialog: MdDialog) { }

  select(selected: Banner): void {
    this.selectedBanner = selected;
    if (this.showDialog) {
      this.openDialog(selected);
    } else {
      this.selectBanner.emit(selected);
    }
  }

  selectedClasses(banner: Banner): string {
    if (this.selectedBanner === banner && !this.showDialog) {
      return 'banner selected';
    }
    return 'banner';
  }

  private openDialog(banner: Banner) {
    const dialogRef = this.dialog.open(BannerDialogComponent);
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
