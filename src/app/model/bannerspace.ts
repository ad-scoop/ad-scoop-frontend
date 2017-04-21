import { AbstractId } from './abstractid';
import { PlaceType } from './placetype';

export class BannerSpace extends AbstractId {

  constructor(
    public place?: PlaceType,
    public width?: number,
    public height?: number,
    public standardSize?: boolean,
    public top?: number,
    public left?: number,
  ) {
    super();
  }

  public setId(id: number): BannerSpace {
    this.id = id;
    return this;
  }

}
