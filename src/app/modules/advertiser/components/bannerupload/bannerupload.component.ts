import { Banner } from '../../../../model/banner';
import { Campaign } from '../../../../model/campaign';
import { FileInfo } from '../../../../model/fileinfo';
import { Component, Input, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-bannerupload',
  templateUrl: './bannerupload.component.html',
  styleUrls: ['./bannerupload.component.css']
})
export class BannerUploadComponent {

  @Input() campaign: Campaign;

  @ViewChild('fileinput') fileInput: ElementRef;

  private file: any;
  model: any = {};

  constructor() { }

  upload(): void {
    this.fileInput.nativeElement.click();
  }

  onChange(event: any) {
    this.file = event.srcElement.files[0];
    this.model.name = this.file.name;
  }

  addBanner(): void {
    this.base64(this.file, fileInfo => {
      this.campaign.banners.push(new Banner(
        this.model.name,
        fileInfo.width,
        fileInfo.height,
        0,
        fileInfo.base64));
    });
  }

  base64(file: any, callback): void {
    let fileInfo = new FileInfo();
    fileInfo.imageType = file.type;
    fileInfo.width = file.width;
    fileInfo.height = file.height;

    function readerOnload(e) {
      fileInfo.base64 = 'data:' + fileInfo.imageType + ';base64,' + btoa(e.target.result);

      callback(fileInfo);
    };

    let reader = new FileReader();
    reader.onload = readerOnload;
    reader.readAsBinaryString(file);
  }

}
