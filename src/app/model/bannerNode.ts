import { AbstractId } from './abstractid';
import { FileInfo } from './fileinfo';

export class Banner extends AbstractId {

  constructor(
    public name: string,
    public width: number,
    public height: number,
    public clicks: number,
    public picture: string) {
    super();
   }

}
