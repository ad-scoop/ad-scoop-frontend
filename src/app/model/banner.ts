import { AbstractId } from './abstractid';
import { FileInfo } from './fileinfo';

export class Banner extends AbstractId {

  public bannerSpaceIds: number[] = [];

  constructor(
    public width?: number,
    public height?: number,
    public clicks?: number,
    public picture?: string) {
    super();
  }

}
