export class BannerSize {

  constructor(public x?: number, public y?: number, public defined?: boolean) { }

  get value(): string {
    if (this.defined) {
      return 'Definer';
    }
    return this.x + ' x ' + this.y;
  }

}
