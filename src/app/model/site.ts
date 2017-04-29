import { AbstractId } from './abstractid';
import { Area } from './area';
import { BannerSpace } from './bannerspace';
import { Demografi } from './demografi';
import { Organisation } from './organisation';
import { puts } from 'util';

export class WebSite extends AbstractId {

  constructor(
    public url: string,
    public accepted: boolean,
    public demografi?: Demografi,
    public area?: Area,
    public organisation?: Organisation,
    public clicks?: number,
    public bannerSpaces: BannerSpace[] = [],
    public labels: string[] = []
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
