import { WebSite } from '../model/site';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class SiteService {

  private webSites: WebSite[] = [
    new WebSite('Gundmann', 'http://www.gundmann.dk', 4, true, 'Sunhed', '2720'),
    new WebSite('adscoop', 'http://www.ad-scoop.dk', 2, true, 'Forening', '2720'),
    new WebSite('Hansen', 'http://www.hansen.dk', 0, false, 'Frisør', '2000'),
    new WebSite('VIF', 'http://www.vif.dk', 1, true, 'Forening', '2720'),
    new WebSite('Amager bf', 'http://www.amager-bf.dk', 3, true, 'Købmand', '2750')
  ];

  constructor() { }

  public sites(): Observable<WebSite[]> {
    return Observable.of(this.webSites);
  }

  public add(webSite: WebSite): Observable<boolean> {
    this.webSites.push(webSite);
    return Observable.of(true);
  }

  public edit(webSite: WebSite): Observable<boolean> {
    return Observable.of(true);
  }

}
