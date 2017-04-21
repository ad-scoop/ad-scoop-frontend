import { Component, Input, ViewChild, ElementRef, HostListener } from '@angular/core';
import { Banner } from '../../../../model/banner';
import { BannerSpace } from '../../../../model/bannerspace';
import { Campaign } from '../../../../model/campaign';
import { WebSite } from '../../../../model/site';
import { WebSiteSearchCriteria } from '../../../../model/websitesearchcriteria';
import { SiteService } from '../../../../services/site.service';
import { WebSiteBanners, Position } from '../../../../utils/websitebanners';

@Component({
  selector: 'app-bannermatcher',
  templateUrl: './bannermatcher.component.html',
  styleUrls: ['./bannermatcher.component.css']
})
export class BannerMatcherComponent {

  @Input() campaign: Campaign;
  @ViewChild('site') siteCanvas: ElementRef;

  selectedBanner: Banner;

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

  constructor(private siteService: SiteService) { }

  get seleectedSite(): WebSite {
    return this._seleectedSite;
  }

  set seleectedSite(seleectedSite: WebSite) {
    if (this.webSiteBanners) {
      this.webSiteBanners.clear();
      this.webSiteBanners = null;
    }
    const serchFor = new WebSiteSearchCriteria();
    serchFor.ids = [seleectedSite.id];
    this.siteService.serche(serchFor).subscribe(sites => {
      if (sites[0]) {
        this.webSiteBanners = new WebSiteBanners(this.siteCanvas, sites[0], this.callbackDraw);
        this.webSiteBanners.draw();
        this._seleectedSite = seleectedSite;
      }
    });
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
            this.selectedBanner.bannerSpaceIds.push(b.id);
          } else {
            //          this.clear();
          }
        });
    }
  }

  webSites(campaign: Campaign): WebSite[] {
    let result = [];
    const searchFor = new WebSiteSearchCriteria();
    searchFor.ids = campaign.webSiteIds;
    this.siteService.serche(searchFor)
      .subscribe(r => result = r);
    return result;
  }

  private findBanners(bannerSpace: BannerSpace): Banner[] {
    return this.campaign.banners.filter(b => b.bannerSpaceIds.find(id => bannerSpace.id === id));
  }

}
