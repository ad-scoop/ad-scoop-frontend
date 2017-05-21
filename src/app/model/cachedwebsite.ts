import { SiteService } from '../services/site.service';
import { Campaign } from './campaign';
import { WebSite } from './site';

export class CachedWebsite {

  private cachedWebSites: Map<Campaign, WebSite[]> = new Map<Campaign, WebSite[]>();

  constructor(private siteService: SiteService) { }

  public clear(): void {
    this.cachedWebSites.clear();
  }

  public getWebSites(campaign: Campaign): WebSite[] {
    if (!this.cachedWebSites.has(campaign)) {
      this.siteService.sercheByIds(campaign.webSiteIds)
        .subscribe(r => this.cachedWebSites.set(campaign, r));
    }
    return this.cachedWebSites.get(campaign);
  }

}