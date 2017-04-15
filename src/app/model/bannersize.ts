export class BannerSize {

  constructor(public x?: number, public y?: number) { }

  get value(): string {
    if (this.isDefine()) {
      return 'Definer';
    }
    return this.x + ' x ' + this.y;
  }

  public isDefine(): boolean {
    return this.x === 0 && this.y === 0;
  }

}