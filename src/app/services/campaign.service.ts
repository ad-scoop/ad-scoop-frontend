import {environment} from '../../environments/environment';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';

import {Campaign} from '../model/campaign';
import {AuthenticationService} from './authentication.service';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';

@Injectable()
export class CampaignService {

  private baseUrl = environment.publisherUrl;

  constructor(private http: HttpClient, private authService: AuthenticationService) {
  }

  getCampaigns(): Observable<any> {
    return this.http
      .get(this.baseUrl, {
        headers: this.getHeadersWithToken()
      });
  }

  public remove(campaign: Campaign): Observable<any> {
    return this.http
      .delete(this.baseUrl + '/remove/' + campaign.id, {
        headers: this.getHeadersWithToken()
       }).catch(response => {
      throw new Error('Fejl ved sletning af kampagnen');
    });
  }

  public edit(campaign: Campaign): Observable<any> {
    return this.http
      .post(this.baseUrl + '/update', campaign, {
        headers: {
          'Content-Type': 'application/json; charset=utf-8',
          'Accept' : 'application/json' , 'token' : this.authService.getToken()
        } })

      .catch(response => {
        throw new Error('Fejl ved ændring af kampagnen');
      });
  }

  public add(campaign: Campaign): Observable<any> {
    return this.http
      .post(this.baseUrl + '/create', campaign, {
        headers: this.getHeadersWithToken()
      })

      .catch(response => {
        throw new Error('Fejl ved oprettelse af kampagnen');
      });
  }

  private getHeadersWithToken(): HttpHeaders {
    return new HttpHeaders({
      'Content-Type': 'application/json; charset=utf-8',
      'Accept': 'application/json', 'token': this.authService.getToken()
    });
  }


}
