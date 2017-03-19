import { environment } from '../../environments/environment'
import { Area } from '../model/area';
import { Injectable } from '@angular/core';
import { Http, Headers, Response, RequestOptionsArgs, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs';

import { Campaign } from '../model/campaign';
import { Banner } from '../model/bannerNode';
import { Demografi } from '../model/demografi';
import { Gender } from '../model/gender';
import { Organisation } from '../model/organisation';
import { WebSite } from '../model/site';
import { AuthenticationService } from './authentication.service';


@Injectable()
export class CampaignService {

  private baseUrl = environment.publisherUrl;

  private sites: WebSite[] = [
    new WebSite(
      'Gundmann',
      'http://www.gundmann.dk',
      true,
      new Demografi(Gender.Unisex),
      new Area('2720', 'Denmark'),
      new Organisation('Sunhed')),
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

  constructor(private http: Http, private authService: AuthenticationService) { }

  getCampaigns(): Observable<Campaign[]> {
    return this.http
      .get(this.baseUrl + '/listUserCampagins', this.getHeadersWithToken())
      .map((resp: Response) => resp.json())
      .catch(response => {
        throw new Error('Fejl ved henting af kampagner');
      });
  }

  public remove(campaign: Campaign): Observable<boolean> {
    return this.http
      .delete(this.baseUrl + '/remove?id=' + campaign.id, this.getHeadersWithToken())
      .map(response => true)
      .catch(response => {
        throw new Error('Fejl ved sletning af kampagnen');
      });
  }

  public edit(campaign: Campaign): Observable<boolean> {
    return this.http
      .post(this.baseUrl + '/update', campaign, this.getHeadersWithToken())
      .map(response => true)
      .catch(response => {
        throw new Error('Fejl ved ændring af kampagnen');
      });
  }

  public create(campaign: Campaign): Observable<boolean> {
    return this.http
      .post(this.baseUrl + '/create', campaign, this.getHeadersWithToken())
      .map(response => true)
      .catch(response => {
        throw new Error('Fejl ved oprettelse af kampagnen');
      });
  }

  public serche(model: any): WebSite[] {
    return this.sites;
  }

  private getHeadersWithToken(): RequestOptions {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json; charset=utf-8');
    headers.append('Accept', 'application/json');
    headers.append('token', this.authService.getToken());
    return new RequestOptions({ headers: headers });;
  }

}
