import { environment } from '../../environments/environment';
import { Area } from '../model/area';
import { Injectable } from '@angular/core';
import { Http, Headers, Response, RequestOptionsArgs, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import { Campaign } from '../model/campaign';
import { Banner } from '../model/banner';
import { Demografi } from '../model/demografi';
import { Organisation } from '../model/organisation';
import { WebSite } from '../model/site';
import { AuthenticationService } from './authentication.service';


@Injectable()
export class CampaignService {

  private baseUrl = environment.publisherUrl;

  constructor(private http: Http, private authService: AuthenticationService) { }

  getCampaigns(): Observable<Campaign[]> {
    return this.http
      .get(this.baseUrl, this.getHeadersWithToken())
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

  public add(campaign: Campaign): Observable<boolean> {
    return this.http
      .post(this.baseUrl + '/create', campaign, this.getHeadersWithToken())
      .map(response => true)
      .catch(response => {
        throw new Error('Fejl ved oprettelse af kampagnen');
      });
  }

  private getHeadersWithToken(): RequestOptions {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json; charset=utf-8');
    headers.append('Accept', 'application/json');
    headers.append('token', this.authService.getToken());
    return new RequestOptions({ headers: headers });
  }

}
