export class WebSiteSearchCriteria {

  constructor(
    public area?: string,
    public near?: boolean,
    public organisationCategory?: string,
    public ids?: number[]
  ) { }

}