import { AbstractId } from './abstractid';
export class BannerSpace extends AbstractId {

  constructor(public width: number, public height: number) { 
    super();
  }

}
