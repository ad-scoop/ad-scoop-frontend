import { Banner } from './banner';
import { Site } from './site';

export class Campaign {

  public banners: Banner[] = [];
  public endDate: Date;
  public sites: Site[] = [];

  constructor(
    public name: string,
    public startDate: Date,
    public maxValue: number) { }

}
