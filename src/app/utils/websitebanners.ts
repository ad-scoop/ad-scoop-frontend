import { BannerSpace } from '../model/bannerspace';
import { WebSite } from '../model/site';
import { ElementRef } from '@angular/core';
import { equal } from 'assert';
import { Observable } from 'rxjs/Observable';

export class WebSiteBanners {

  private canvaswidth = 500;
  private canvasheight = 400;
  private _canvasscale = 2;
  private context: CanvasRenderingContext2D;
  private boxColor = '#f1d390';
  private _selected: BannerSpace;

  constructor(
    public siteCanvas: ElementRef,
    public site: WebSite,
    private callbackDraw?: (bannerSpace: BannerSpace, position: Position, context: CanvasRenderingContext2D) => void) { }

  public draw(): void {
    const canvas = this.siteCanvas.nativeElement;
    canvas.width = this.canvaswidth;
    canvas.height = this.canvasheight;
    this.context = canvas.getContext('2d');

    this.drawSpaces();
  }

  get canvasscale() {
    return this._canvasscale;
  }

  get selected(): BannerSpace {
    return this._selected;
  }

  set selected(seleted: BannerSpace) {
    this._selected = seleted;
  }

  public clear(): void {
    this.site = null;
    this._selected = null;
    this.drawSpaces();
  }

  public equalBannerSpace(bs1: BannerSpace, bs2: BannerSpace): boolean {
    return JSON.stringify(bs1) === JSON.stringify(bs2);
  }

  public mouseOverElement(x: any, y: any): Observable<boolean> {
    if (this.site && this.site.bannerSpaces) {
      const realPosisition = this.getGlobalPosition(this.siteCanvas.nativeElement);
      x -= realPosisition.x;
      y -= realPosisition.y;

      return Observable.of(this.site.bannerSpaces.some(b => {
        return this.mousePosistionIn(b, x, y);
      }));
    }
    return Observable.of(false);
  }

  public getGlobalPosition(element: any): Position {
    let x = 0;
    let y = 0;
    while (element) {
      y += element.offsetTop;
      x += element.offsetLeft;
      element = element.offsetParent;
    }
    return new Position(x, y);
  }

  public getSelectedSpace(x: any, y: any): Observable<BannerSpace> {
    this._selected = this.site.bannerSpaces.find(b => this.mousePosistionIn(b, x, y));
    return Observable.of(this._selected);
  }

  private drawSpaces(): void {
    this.calcCanvasSize();
    requestAnimationFrame(() => {
      this.drawSpaces();
    });

    this.drawCanvas();
    if (this.site && this.site.bannerSpaces) {
      this.site.bannerSpaces.forEach(b => {
        this.drawBannerSpace(b);
      });
    }
  }

  private mousePosistionIn(b: BannerSpace, x: any, y: any): boolean {
    const place = this.calculatePlace(b);

    return (place.x <= x && place.x + (b.width / this._canvasscale) >= x) &&
      (place.y <= y && place.y + (b.height / this._canvasscale) >= y);
  }

  private calcCanvasSize(): void {
    const canvas = this.siteCanvas.nativeElement;
    if (window.screen.width < 620) {
      this.canvaswidth = 300;
      this.canvasheight = 200;
      this._canvasscale = 4;
    } else if (window.screen.width < 780) {
      this.canvaswidth = 400;
      this.canvasheight = 300;
      this._canvasscale = 3;
    } else {
      this.canvaswidth = 500;
      this.canvasheight = 350;
      this._canvasscale = 2;
    }
    canvas.width = this.canvaswidth;
    canvas.height = this.canvasheight;
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
    this.context.fillText('Webside', (this.canvaswidth / 2) - 65, (this.canvasheight / 2) + 7.5);
  }

  private drawBannerSpace(bannerSpace: BannerSpace) {
    this.context.beginPath();
    this.context.lineWidth = 2;
    this.context.strokeStyle = this.boxColor;
    if (this.equalBannerSpace(bannerSpace, this._selected)) {
      this.context.lineWidth = 3;
      this.context.setLineDash([1, 2]);
    }
    const place = this.calculatePlace(bannerSpace);

    if (this.callbackDraw) {
      this.callbackDraw(bannerSpace, place, this.context);
    }

    this.context.rect(place.x, place.y, bannerSpace.width / this._canvasscale, bannerSpace.height / this._canvasscale);
    this.context.stroke();


    this.context.strokeStyle = this.boxColor;
    this.context.lineWidth = 1;
    this.context.setLineDash([]);
    this.context.font = '12px Roboto, sans-serif';
    this.context.strokeText(bannerSpace.width + ' x ' + bannerSpace.height,
      place.x + (30 / this._canvasscale), place.y + (30 / this._canvasscale));
  }

  private calculatePlace(bannerSpace: BannerSpace): Position {
    let result = new Position(3, 3);

    const currentPlace = bannerSpace.place;

    if ('Top' === currentPlace) {
      const left = (this.canvaswidth - (bannerSpace.width / this._canvasscale)) / 2;
      result = new Position(left, 3);
    }
    if ('Bottom' === currentPlace) {
      const left = (this.canvaswidth - (bannerSpace.width / this._canvasscale)) / 2;
      result = new Position(left, this.canvasheight - (bannerSpace.height / this._canvasscale) - 3);
    }
    if ('Define' === currentPlace) {
      result = new Position(bannerSpace.left / this._canvasscale, bannerSpace.top / this._canvasscale);
    }
    if ('Right' === currentPlace) {
      result = new Position((this.canvaswidth - (bannerSpace.width / this._canvasscale)) - 3, 120 / this._canvasscale);
    }
    if ('Left' === currentPlace) {
      result = new Position(3, 120 / this._canvasscale);
    }
    return result;
  }

}

export class Position {

  constructor(
    public x: number,
    public y: number) { }

}

