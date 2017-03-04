import { BannerSpace } from './bannerspace';

export class Site {

  public bannerSpace: BannerSpace[];

  constructor(
    public name: string,
    public url: string,
    public clicks: number,
    public accepted: boolean,
    public industry: string,
    public zip: string) { }

}
