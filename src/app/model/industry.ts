export class Industry {

  public static create(name: string, categoris: string[]): Industry {
    return new Industry(name, categoris);
  }

  constructor(
    public name: string,
    public categoris: string[]) { }

}
