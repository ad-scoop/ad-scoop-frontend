export class WebSiteSearchCriteria {

  constructor(
    public area?: string,
    public near?: boolean,
    public organisationCategory?: string,
    public branchCategory?: string
  ) {}

  public extractUrl(): string {
    const parameters = this.convertOrganisation(this.convertArea());
    if (parameters) {
      return '?' + parameters;
    }
    return '?';
  }

  private convertArea(): string {
    if (this.area) {
      return 'country=' + this.area + '&region=' + this.area + '&zip=' + this.area;
    }
    return undefined;
  }

  private convertOrganisation(query: string): string {
    if (this.organisationCategory) {
      if (query) {
        return query + '&category=' + this.organisationCategory;
      }
      return 'category=' + this.organisationCategory;
    }
    return query;
  }

}
