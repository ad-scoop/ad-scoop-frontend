import {Component, Input, ViewChild, ElementRef, HostListener} from '@angular/core';
import {Banner} from '../../../../model/banner';
import {BannerSpace} from '../../../../model/bannerspace';
import {CachedWebsite} from '../../../../model/cachedwebsite';
import {Campaign} from '../../../../model/campaign';
import {WebSite} from '../../../../model/site';
import {WebSiteSearchCriteria} from '../../../../model/websitesearchcriteria';
import {SiteService} from '../../../../services/site.service';
import {WebSiteBanners, Position} from '../../../../utils/websitebanners';

@Component({
  selector: 'app-bannermatcher',
  templateUrl: './bannermatcher.component.html',
  styleUrls: ['./bannermatcher.component.css']
})
export class BannerMatcherComponent {

  @Input() campaign: Campaign;
  @ViewChild('site') siteCanvas: ElementRef;

  selectedBanner: Banner;
  cachedWebsite: CachedWebsite;

  private _seleectedSite: WebSite;

  private webSiteBanners: WebSiteBanners;

  callbackDraw = (bannerSpace: BannerSpace, position: Position, context: CanvasRenderingContext2D) => {
    const banners: Banner[] = this.findBanners(bannerSpace);
    banners.forEach(b => {
      const img = new Image();
      img.src = b.picture;
      context.drawImage(img, position.x, position.y,
        img.width / this.webSiteBanners.canvasscale,
        img.height / this.webSiteBanners.canvasscale);
    });
  }

  constructor(private siteService: SiteService) {
    this.cachedWebsite = new CachedWebsite(this.siteService);
  }

  get selectedSite(): WebSite {
    return this._seleectedSite;
  }

  set selectedSite(seleectedSite: WebSite) {
    if (this.webSiteBanners) {
      this.webSiteBanners.clear();
      this.webSiteBanners = null;
    }
    this.webSiteBanners = new WebSiteBanners(this.siteCanvas, seleectedSite, this.callbackDraw);
    this.webSiteBanners.draw();
    this._seleectedSite = seleectedSite;
  }

  @HostListener('mousemove', ['$event'])
  onMousemove(event: MouseEvent) {
    if (this.webSiteBanners) {
      this.webSiteBanners.mouseOverElement(event.x, event.y).subscribe(result => {
        if (result) {
          this.siteCanvas.nativeElement.style = 'cursor: pointer';
        } else {
          this.siteCanvas.nativeElement.style = 'cursor: default';
        }
      });
    }
  }

  canvasClick(event: MouseEvent) {
    if (this.webSiteBanners) {
      const realPosisition = this.webSiteBanners.getGlobalPosition(this.siteCanvas.nativeElement);
      const x = event.x - realPosisition.x;
      const y = event.y - realPosisition.y;
      this.webSiteBanners.getSelectedSpace(x, y)
        .subscribe(b => {
          if (b) {
            if (this.selectedBanner.bannerSpaceIds.find(id => id === b.id)) {
              this.selectedBanner.bannerSpaceIds.splice(this.selectedBanner.bannerSpaceIds.indexOf(b.id), 1);
            } else {
              this.selectedBanner.bannerSpaceIds.push(b.id);
            }
          }
        });
    }
  }

  get webSites(): WebSite[] {
    return this.cachedWebsite.getWebSites(this.campaign);
  }

  private findBanners(bannerSpace: BannerSpace): Banner[] {
    return this.campaign.banners.filter(b => b.bannerSpaceIds.find(id => bannerSpace.id === id));
  }

}
