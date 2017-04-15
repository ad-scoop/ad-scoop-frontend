import { BannerSize } from '../../../../model/bannersize';
import { BannerSpace } from '../../../../model/bannerspace';
import { PlaceSelection } from '../../../../model/placeselection';
import { PlaceType } from '../../../../model/placetype';
import { WebSite } from '../../../../model/site';
import { SiteService } from '../../../../services/site.service';
import { EditInterface } from '../editdialog/editinterface';
import {
  Component, OnInit, Input, AfterViewInit, ViewChild,
  ViewContainerRef, ComponentFactoryResolver, HostListener, ElementRef
} from '@angular/core';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent implements EditInterface, AfterViewInit {

  @Input() site: WebSite;
  @ViewChild('site') siteCanvas: ElementRef;

  private canvaswidth = 500;
  private canvasheight = 400;
  private canvasscale = 2;

  model: BannerSpace = new BannerSpace();
  bannerLocations = [];
  bannerSizes = [];

  selectedSize: BannerSize = new BannerSize();
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
    canvas.height = this.canvasheight;
    this.context = canvas.getContext('2d');

    this.draw();
  }

  @HostListener('mousemove', ['$event'])
  onMousemove(event: MouseEvent) {
    this.mouseOverElement(event.x, event.y).subscribe(result => {
      if (result) {
        this.siteCanvas.nativeElement.style = 'cursor: pointer';
      } else {
        this.siteCanvas.nativeElement.style = 'cursor: default';
      }
    });
  }

  canvasClick(event: MouseEvent) {
    const realPosisition = this.getGlobalPosition(this.siteCanvas.nativeElement);
    const x = event.x - realPosisition.x;
    const y = event.y - realPosisition.y;
    this.getSelectedSpace(x, y)
      .subscribe(b => {
        this.model = b;
        this.selectedSize = this.bannerSizes.find(s => s.x === b.width && s.y === b.height);
        this.selectedLocation = this.siteService.bannerLocations.find(p => b.place === p.place);
      });
  }

  add(): void {
    this.site.bannerSpaces.push(new BannerSpace(
      this.selectedSize.x,
      this.selectedSize.y,
      this.model.top,
      this.model.left,
      this.selectedLocation.place));
    this.clear();
  }

  valid(): boolean {
    return this.site.bannerSpaces.length > 0;
  }

  invalid(): void {

  }

  edit(): void {

  }

  remove(): void {
    const index = this.site.bannerSpaces.indexOf(this.model);
    this.site.bannerSpaces.splice(index, 1);
    this.clear();
  }

  isSizeDefineSelected(): boolean {
    return this.selectedSize.isDefine();
  }

  isLocationDefineSelected(): boolean {
    return this.selectedLocation.place === PlaceType.Define;
  }

  isSelected(): boolean {
    return this.model.isSet();
  }

  draw(): void {
    this.calcCanvasSize();
    requestAnimationFrame(() => {
      this.draw();
    });

    this.drawCanvas();
    this.site.bannerSpaces.forEach(b => {
      this.drawBannerSpace(b);
    });
  }

  private clear(): void {
    this.model = new BannerSpace();
    this.selectedLocation = new PlaceSelection(null, '');
    this.selectedSize = new BannerSize();
  }

  private calcCanvasSize(): void {
    const canvas = this.siteCanvas.nativeElement;
    if (window.screen.width < 620) {
      this.canvaswidth = 300;
      this.canvasheight = 200;
      this.canvasscale = 4;
    } else if (window.screen.width < 780) {
      this.canvaswidth = 400;
      this.canvasheight = 300;
      this.canvasscale = 3;
    } else {
      this.canvaswidth = 500;
      this.canvasheight = 350;
      this.canvasscale = 2;
    }
    canvas.width = this.canvaswidth;
    canvas.height = this.canvasheight;
  }

  private mouseOverElement(x: any, y: any): Observable<boolean> {
    const realPosisition = this.getGlobalPosition(this.siteCanvas.nativeElement);
    x -= realPosisition.x;
    y -= realPosisition.y;

    return Observable.of(this.site.bannerSpaces.some(b => {
      return this.mousePosistionIn(b, x, y);
    }));
  }

  private getSelectedSpace(x: any, y: any): Observable<BannerSpace> {
    return Observable.of(this.site.bannerSpaces.find(b => this.mousePosistionIn(b, x, y)));
  }

  private mousePosistionIn(b: BannerSpace, x: any, y: any): boolean {
    return (b.left <= x && b.left + (b.width / this.canvasscale) >= x) &&
      (b.top <= y && b.top + (b.height / this.canvasscale) >= y);
  }

  private getGlobalPosition(element: any): Position {
    let x = 0;
    let y = 0;
    while (element) {
      y += element.offsetTop;
      x += element.offsetLeft;
      element = element.offsetParent;
    }
    return new Position(x, y);
  }

  private drawCanvas(): void {
    this.context.clearRect(0, 0, this.canvaswidth, this.canvasheight);
    this.context.beginPath();
    this.context.lineWidth = 1;
    this.context.strokeStyle = 'black';
    this.context.rect(0, 0, this.canvaswidth, this.canvasheight);
    this.context.stroke();

    this.context.fillStyle = '#f0f0f0';
    this.context.font = '30px Roboto, sans-serif';
    this.context.fillText('Webseite', (this.canvaswidth / 2) - 65, (this.canvasheight / 2) + 7.5);
  }

  private drawBannerSpace(bannerSpace: BannerSpace) {
    this.context.beginPath();
    this.context.lineWidth = 1;
    this.context.strokeStyle = 'red';
    const place = this.calculatePlace(bannerSpace);
    bannerSpace.top = place.y;
    bannerSpace.left = place.x;
    this.context.rect(place.x, place.y, bannerSpace.width / this.canvasscale, bannerSpace.height / this.canvasscale);
    this.context.stroke();

    this.context.strokeStyle = 'red';
    this.context.font = '9px Roboto, sans-serif';
    this.context.strokeText(bannerSpace.width + ' x ' + bannerSpace.height, place.x + this.canvasscale, place.y + 10);

  }

  private calculatePlace(bannerSpace: BannerSpace): Position {
    if (PlaceType.Top === bannerSpace.place) {
      const left = (this.canvaswidth - (bannerSpace.width / this.canvasscale)) / 2;
      return new Position(left, 1);
    }
    if (PlaceType.Bottom === bannerSpace.place) {
      const left = (this.canvaswidth - (bannerSpace.width / this.canvasscale)) / 2;
      return new Position(left, this.canvasheight - (bannerSpace.height / this.canvasscale));
    }
    if (PlaceType.Define === bannerSpace.place) {
      return new Position(bannerSpace.left, bannerSpace.top);
    }
    if (PlaceType.Right === bannerSpace.place) {
      return new Position(this.canvaswidth - (bannerSpace.width / this.canvasscale), 30);
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
