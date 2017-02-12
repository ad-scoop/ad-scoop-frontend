import { Banner } from './banner';

export class Campaign {

  public banners: Banner[];
  public endDate: Date;

  constructor(
    public name: string,
    public startDate: Date,
    public maxValue: number) { }

}
