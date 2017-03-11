import { AbstractId } from './abstractid';
import { BannerSpace } from './bannerspace';

export class WebSite extends AbstractId {

  public bannerSpace: BannerSpace[];

  constructor(
    public name: string,
    public url: string,
    public clicks: number,
    public accepted: boolean,
    public industry: string,
    public zip: string) {
    super();
  }

}
