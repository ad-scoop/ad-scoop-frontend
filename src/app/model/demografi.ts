import { Gender } from './gender';

export class Demografi {

  constructor(
    public gender: Gender,
    public minAge?: number,
    public maxAge?: number) { }

  public genderStr(): string {
    switch (this.gender) {
      case Gender.Man: return 'Mænd';
      case Gender.Woman: return 'Kvinder';
      case Gender.Unisex: return 'Unisex';
      case Gender.Children: return 'Børn';
    }
  }

}
