import { Banner } from './banner';
import { Site } from './site';

export class Campaign {

  public banners: Banner[] = [];
  public endDate: Date;
  public sites: Site[] = [];
  public clicks: number;
  public price: number;
  public maxValue: number;

  constructor(
    public name: string,
    public startDate: Date) { }

}
