import { BannerNode } from './bannerNode';
import { Site } from './site';

export class Campaign {

  public banners: BannerNode[] = [];
  public endDate: number;
  public clicks: number;
  public maxPricePrDay: number;
  public price: number;
  public name: string;
  public startDateStr = '2018-01-01';

  public sites: Site[] = [];

  constructor(public startDate: number) { }

  //  get startDateStr(): string {
  //    return '2018-01-01';
  //  }
  //
  //  set startDateStr(startDate: string) {
  //    this.startDate = new Date(startDate).getTime();
  //  }

}
