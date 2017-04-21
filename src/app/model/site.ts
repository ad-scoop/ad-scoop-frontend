import { AbstractId } from './abstractid';
import { Area } from './area';
import { BannerSpace } from './bannerspace';
import { Demografi } from './demografi';
import { Organisation } from './organisation';
import { puts } from 'util';

export class WebSite extends AbstractId {

  public labels: String[] = [];
  public bannerSpaces: BannerSpace[] = [];

  constructor(
    public name: string,
    public url: string,
    public accepted: boolean,
    public demografi?: Demografi,
    public area?: Area,
    public organisation?: Organisation,
    public clicks?: number
  ) { super(); }

  public setId(id: number): WebSite {
    this.id = id;
    return this;
  }

  public addBannerSpace(bannerSpace: BannerSpace): WebSite {
    this.bannerSpaces.push(bannerSpace);
    return this;
  }
}
