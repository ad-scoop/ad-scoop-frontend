import { AbstractId } from './abstractid';
export class BannerSpace extends AbstractId {

  constructor(
    public width: number,
    public height: number,
    public top: number,
    public left, number) {
    super();
  }

}
