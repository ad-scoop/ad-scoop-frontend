import { BannerNode } from './banner';
import { Site } from './site';

export class Campaign {

  public banners: BannerNode[] = [];
  public endDate: Date;
  public sites: Site[] = [];
  public clicks: number;
  public maxPricePrDay: number;
  public price: number;

  constructor(
    public name: string,
    public startDate: Date) { }

}
