import { Gender } from './gender';

export class Demografi {

  constructor(
    public gender: Gender[],
    public minAge?: number,
    public maxAge?: number) { }

}
