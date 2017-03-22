import { environment } from '../../environments/environment';
import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

import { User } from './../model/user';

@Injectable()
export class AuthenticationService {

  public static ADVERTISER = 'advertiser';
  public static PROVIDER = 'provider';
  
  private baseUrl = environment.userUrl;

  constructor(private http: Http) { }

  login(email: string, password: string): Observable<string[]> {
    return this.http
      .post(this.baseUrl + '/login', { email: email, password: password }, this.getHeaders())
      .map(this.mapUser)
      .catch(response => {
        throw new Error('' + response.status);
      });
  }

  selectProfile(profile: string) {
    let currentUser = JSON.parse(localStorage.getItem('currentUser'));
    currentUser.labels = [profile];
    localStorage.setItem('currentUser', JSON.stringify(currentUser));
  }

  logout(): void {
    localStorage.removeItem('currentUser');
  }

  isLoggedIn(): boolean {
    return this.getToken() !== null;
  }

  isNotLoggedIn(): boolean {
    return this.getToken() === null;
  }

  isLoggedInAsAdvertiser(): boolean {
    return this.isLoggedIn() && this.getLabels().find(e => e === AuthenticationService.ADVERTISER) === AuthenticationService.ADVERTISER;
  }

  isLoggedAsProvider(): boolean {
    return this.isLoggedIn() && this.getLabels().find(e => e === AuthenticationService.PROVIDER) === AuthenticationService.PROVIDER;
  }

  getToken(): string {
    let currentUser = JSON.parse(localStorage.getItem('currentUser'));
    return currentUser && currentUser.token;
  }

  getLabels(): string[] {
    let currentUser = JSON.parse(localStorage.getItem('currentUser'));
    return currentUser && currentUser.labels;
  }

  private getHeaders(): Headers {
    let headers = new Headers();
    headers.append('Accept', 'application/json');
    return headers;
  }

  private mapUser(response: Response): string[] {
    let token = response.json().token;
    let labels = response.json().labels;
    if (token) {
      localStorage.setItem('currentUser', JSON.stringify({ labels: labels, token: token }));
    } else {
      throw new Error('Fejl ved login');
    }
    return labels;
  }

}
