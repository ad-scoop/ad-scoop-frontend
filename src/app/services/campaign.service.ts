import { Campaign } from '../model/campaign';
import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Observable } from 'rxjs';

@Injectable()
export class CampaignService {

  private campains: Campaign[] = [
    new Campaign('Campaign 1', new Date(), 20),
    new Campaign('Campaign 2', new Date(), 30),
    new Campaign('Campaign 3', new Date(), 100)
  ];

  constructor(private http: Http) { }

  getCampaigns(): Observable<Campaign[]> {
    return Observable.of(this.campains);
  }

}
