import { environment } from '../../../../../environments/environment';
import { BannerNode } from '../../../../model/bannerNode';
import { Campaign } from '../../../../model/campaign';
import { FileInfo } from '../../../../model/fileinfo';
import { AlertService } from '../../../../services/alert.service';
import { EditInterface } from '../editdialog/editinterface';
import { Component, Input, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-bannerupload',
  templateUrl: './bannerupload.component.html',
  styleUrls: ['./bannerupload.component.css']
})
export class BannerUploadComponent implements EditInterface {

  @Input() campaign: Campaign;

  @ViewChild('fileinput') fileInput: ElementRef;

  private maxPictureSize = environment.maxPictureSize;
  private file: File;
  model: any = {};

  constructor(private alertService: AlertService) { }

  valid(): boolean {
    return true;
  }

  invalid(): void {
  }

  edit() {
    console.log('test');
  }

  upload(): void {
    this.fileInput.nativeElement.click();
  }

  onChange(event: any) {
    this.file = event.srcElement.files[0];
    if (this.file.size > this.maxPictureSize) {
      this.alertService.warn('Filen: ' + this.file.name + ' er for stor.');
      this.file = null;
    } else {
      this.model.name = this.file.name;
    }
  }

  addBanner(): void {
    this.base64(this.file, fileInfo => {
      this.campaign.banners.push(new BannerNode(
        this.model.name,
        fileInfo.width,
        fileInfo.height,
        0,
        fileInfo.base64));
    });
  }

  base64(file: File, callback): void {
    let fileInfo = new FileInfo();
    fileInfo.imageType = file.type;

    function readerOnload(e) {
      fileInfo.base64 = 'data:' + fileInfo.imageType + ';base64,' + btoa(e.target.result);
      let img = new Image();
      img.src = fileInfo.base64;
      fileInfo.width = img.width;
      fileInfo.height = img.height;
      callback(fileInfo);
    };

    let reader = new FileReader();
    reader.onload = readerOnload;
    reader.readAsBinaryString(file);
  }

}
