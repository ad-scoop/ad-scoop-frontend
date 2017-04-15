import { AbstractId } from './abstractid';
import { PlaceType } from './placetype';

export class BannerSpace extends AbstractId {

  constructor(
    public width?: number,
    public height?: number,
    public top?: number,
    public left?: number,
    public place?: PlaceType) {
    super();
  }

  public isSet(): boolean {
    return this.place !== undefined && this.width !== undefined && this.height !== undefined;
  }

}
