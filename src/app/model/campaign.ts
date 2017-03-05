import { BannerNode } from './bannerNode';
import { Site } from './site';

export class Campaign {

  public banners: BannerNode[] = [];
  public endDate: number;
  public clicks: number;
  public maxPricePrDay: number;
  public price: number;
  public name: string;

  public sites: Site[] = [];

  constructor(public startDate: number) { }

}
