export class Country {

  constructor(
    public name: string,
    public regions: string[]) {
  }

  public toString = (): string => {
    return `${this.name}`;
  }

}
