import { Area } from '../model/area';
import { Demografi } from '../model/demografi';
import { Gender } from '../model/gender';
import { Organisation } from '../model/organisation';
import { WebSite } from '../model/site';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class SiteService {

  private webSites: WebSite[] = [
    new WebSite(
      'Gundmann',
      'http://www.gundmann.dk',
      true,
      new Demografi(Gender.Unisex),
      new Area('2720', 'Denmark'),
      new Organisation('Sunhed')
    ),
    new WebSite(
      'adscoop',
      'http://www.ad-scoop.dk',
      true,
      new Demografi(Gender.Man),
      new Area('2720', 'Denmark'),
      new Organisation('Forening')),
    new WebSite(
      'Hansen',
      'http://www.hansen.dk',
      false,
      new Demografi(Gender.Woman),
      new Area('2720', 'Denmark'),
      new Organisation('Frisør')),
    new WebSite(
      'VIF',
      'http://www.vif.dk',
      true,
      new Demografi(Gender.Unisex),
      new Area('2720', 'Denmark'),
      new Organisation('Forening')),
    new WebSite(
      'Amager',
      'http://www.amager.dk',
      true,
      new Demografi(Gender.Unisex),
      new Area('2720', 'Denmark'),
      new Organisation('Købmand'))
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
