import { AbstractId } from './abstractid';
import { Banner } from './bannerNode';
import { WebSite } from './site';

export class Campaign extends AbstractId {

  public banners: Banner[] = [];
  public endDate: number;
  public clicks: number;
  public maxPricePrDay: number;
  public price: number;
  public name: string;

  public sites: WebSite[] = [];

  constructor(public startDate: number) {
    super();
  }

}
