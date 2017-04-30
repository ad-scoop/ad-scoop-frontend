import { AbstractId } from './abstractid';

export class BannerSpace extends AbstractId {

  constructor(
    public place?: string,
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
