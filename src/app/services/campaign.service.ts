import { environment } from '../../environments/environment'
import { Injectable } from '@angular/core';
import { Http, Headers, Response, RequestOptionsArgs, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs';

import { Campaign } from '../model/campaign';
import { BannerNode } from '../model/bannerNode';
import { Site } from '../model/site';
import { AuthenticationService } from './authentication.service';


@Injectable()
export class CampaignService {

  private baseUrl = environment.publisherUrl;

  
  private sites: Site[] = [
    new Site('Gundmann', 'http://www.gundmann.dk', 4, true, 'Sunhed', '2720'),
    new Site('adscoop', 'http://www.ad-scoop.dk', 2, true, 'Forening', '2720'),
    new Site('Hansen', 'http://www.hansen.dk', 0, false, 'Frisør', '2000'),
    new Site('VIF', 'http://www.vif.dk', 1, true, 'Forening', '2720'),
    new Site('Amager bf', 'http://www.amager-bf.dk', 3, true, 'Købmand', '2750')
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
      .delete(this.baseUrl + '/remove?name=' + campaign.name, this.getHeadersWithToken())
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

  public serche(model: any): Site[] {
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
