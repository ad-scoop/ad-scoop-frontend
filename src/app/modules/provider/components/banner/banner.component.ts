import { BannerSpace } from '../../../../model/bannerspace';
import { PlaceSelection } from '../../../../model/placeselection';
import { PlaceType } from '../../../../model/placetype';
import { WebSite } from '../../../../model/site';
import { SiteService } from '../../../../services/site.service';
import { EditInterface } from '../editdialog/editinterface';
import {
  Component, OnInit, Input, AfterViewInit, ViewChild,
  ViewContainerRef, ComponentFactoryResolver,
} from '@angular/core';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent implements EditInterface, AfterViewInit {

  @Input() site: WebSite;
  @ViewChild('site') siteCanvas;

  private canvaswidth = 500;

  model: BannerSpace = new BannerSpace();
  bannerLocations = [];
  bannerSizes = [];

  define = 'Definer';
  selectedSize: any = '';
  selectedLocation: PlaceSelection = new PlaceSelection(null, '');

  context: CanvasRenderingContext2D;

  constructor(
    private siteService: SiteService,
    private viewContainerRef: ViewContainerRef,
    private componentFactoryResolver: ComponentFactoryResolver) {
    this.bannerSizes = this.siteService.bannerSizes;
    this.bannerLocations = this.siteService.bannerLocations;
  }

  ngAfterViewInit() {
    const canvas = this.siteCanvas.nativeElement;
    canvas.width = this.canvaswidth;
    canvas.height = 400;
    this.context = canvas.getContext('2d');

    this.draw();
  }

  add(): void {
    this.site.bannerSpaces.push(new BannerSpace(
      this.selectedSize[0],
      this.selectedSize[1],
      this.model.top,
      this.model.left,
      this.selectedLocation.place));
  }

  valid(): boolean {
    return true;
  }

  invalid(): void {

  }

  edit(): void {

  }

  isSizeDefineSelected(): boolean {
    return this.selectedSize === this.define;
  }

  isLocationDefineSelected(): boolean {
    return this.selectedLocation.place === PlaceType.Define;
  }

  draw(): void {
    requestAnimationFrame(() => {
      this.draw();
    });

    this.drawCanvas();
    this.site.bannerSpaces.forEach(b => {
      this.drawBannerSpace(b);
    });
  }

  private drawCanvas(): void {
    this.context.clearRect(0, 0, this.canvaswidth, 400);
    this.context.beginPath();
    this.context.lineWidth = 1;
    this.context.strokeStyle = 'black';
    this.context.rect(0, 0, this.canvaswidth, 400);
    this.context.stroke();

    this.context.fillStyle = '#f0f0f0';
    this.context.font = '30px Roboto, sans-serif';
    this.context.fillText('Webseite', 180, 185);
  }

  private drawBannerSpace(bannerSpace: BannerSpace) {
    this.context.beginPath();
    this.context.lineWidth = 1;
    this.context.strokeStyle = 'red';
    const place = this.calculatePlace(bannerSpace);
    this.context.rect(place.x, place.y, bannerSpace.width / 2, bannerSpace.height / 2);
    this.context.stroke();

    this.context.strokeStyle = 'red';
    this.context.font = '9px Roboto, sans-serif';
    this.context.strokeText(bannerSpace.width + ' x ' + bannerSpace.height, place.x + 2, place.y + 10);

  }

  private calculatePlace(bannerSpace: BannerSpace): Position {
    if (PlaceType.Top === bannerSpace.place) {
      const left = (this.canvaswidth - (bannerSpace.width / 2)) / 2;
      return new Position(left, 1);
    }
    if (PlaceType.Bottom === bannerSpace.place) {
      return new Position(1, 150 - (bannerSpace.height / 3));
    }
    if (PlaceType.Define === bannerSpace.place) {
      return new Position(bannerSpace.left, bannerSpace.top);
    }
    if (PlaceType.Right === bannerSpace.place) {
      return new Position(300 - (bannerSpace.width / 3), 30);
    }
    if (PlaceType.Left === bannerSpace.place) {
      return new Position(0, 30);
    }
    return new Position(0, 0);
  }

}

class Position {

  constructor(
    public x: number,
    public y: number) { }

}
