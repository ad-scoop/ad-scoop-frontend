import { BannerSize } from '../../../../model/bannersize';
import { BannerSpace } from '../../../../model/bannerspace';
import { PlaceSelection } from '../../../../model/placeselection';
import { WebSite } from '../../../../model/site';
import { SiteService } from '../../../../services/site.service';
import { WebSiteBanners } from '../../../../utils/websitebanners';
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

  model: BannerSpace = new BannerSpace();
  bannerLocations = [];
  bannerSizes = [];

  _selectedSize: BannerSize = new BannerSize();
  _selectedLocation: PlaceSelection = new PlaceSelection(null, '');

  private webSiteBanners: WebSiteBanners;

  constructor(
    private siteService: SiteService,
    private viewContainerRef: ViewContainerRef,
    private componentFactoryResolver: ComponentFactoryResolver) {
    this.bannerSizes = this.siteService.bannerSizes;
    this.bannerLocations = this.siteService.bannerLocations;
  }

  get selectedLocation(): PlaceSelection {
    return this._selectedLocation;
  }

  set selectedLocation(selectedLocation: PlaceSelection) {
    if (selectedLocation) {
      this.model.place = selectedLocation.place;
    }
    this._selectedLocation = selectedLocation;
  }

  get selectedSize(): BannerSize {
    return this._selectedSize;
  }

  set selectedSize(selectedSize: BannerSize) {
    if (selectedSize) {
      this.model.standardSize = !selectedSize.defined;
      if (this.model.standardSize) {
        this.model.width = selectedSize.x;
        this.model.height = selectedSize.y;
      }
    }
    this._selectedSize = selectedSize;
  }

  canAdd(): boolean {
    return this._selectedLocation.place === null || this._selectedSize.x === undefined;
  }

  ngAfterViewInit() {
    this.webSiteBanners = new WebSiteBanners(this.siteCanvas, this.site);
    this.webSiteBanners.draw();
  }

  @HostListener('mousemove', ['$event'])
  onMousemove(event: MouseEvent) {
    this.webSiteBanners.mouseOverElement(event.x, event.y).subscribe(result => {
      if (result) {
        this.siteCanvas.nativeElement.style = 'cursor: pointer';
      } else {
        this.siteCanvas.nativeElement.style = 'cursor: default';
      }
    });
  }

  canvasClick(event: MouseEvent) {
    const realPosisition = this.webSiteBanners.getGlobalPosition(this.siteCanvas.nativeElement);
    const x = event.x - realPosisition.x;
    const y = event.y - realPosisition.y;
    this.webSiteBanners.getSelectedSpace(x, y)
      .subscribe(b => {
        if (b) {
          this.model = b;
          if (b.standardSize) {
            this.selectedSize = this.bannerSizes.find(s => s.x === b.width && s.y === b.height);
          } else {
            this.selectedSize = this.bannerSizes.find(s => s.x === 0 && s.y === 0);
          }
          this.selectedLocation = this.siteService.bannerLocations.find(p => b.place === p.place);
        } else {
          this.clear();
        }
      });
  }

  add(): void {
    if (!this.site.bannerSpaces) {
      this.site.bannerSpaces = [];
    }
    this.site.bannerSpaces.push(this.model);
    this.clear();
  }

  valid(): boolean {
    return this.site.bannerSpaces.length > 0;
  }

  invalid(): void {

  }

  edit(): void {
    this.clear();
  }

  remove(): void {
    const index = this.site.bannerSpaces.indexOf(this.model);
    this.site.bannerSpaces.splice(index, 1);
    this.clear();
  }

  isSizeDefineSelected(): boolean {
    return this.selectedSize && this.selectedSize.defined;
  }

  isLocationDefineSelected(): boolean {
    return this.selectedLocation && this.selectedLocation.place && this.selectedLocation.place === 'Define';
  }

  isSelected(): boolean {
    return this.site.bannerSpaces && this.site.bannerSpaces.find(b => JSON.stringify(b) === JSON.stringify(this.model)) !== undefined;
  }

  private clear(): void {
    this.model = new BannerSpace();
    this.selectedLocation = new PlaceSelection(null, '');
    this.selectedSize = new BannerSize();
    this.webSiteBanners.selected = null;
  }

}
