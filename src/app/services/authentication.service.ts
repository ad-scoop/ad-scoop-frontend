import {environment} from '../../environments/environment';
import {Injectable} from '@angular/core';
import {Response} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import {HttpClient, HttpHeaders} from "@angular/common/http";

@Injectable()
export class AuthenticationService {

  public static ADVERTISER = 'advertiser';
  public static PROVIDER = 'provider';

  private baseUrl = environment.userUrl;

  constructor(private http: HttpClient) {
  }

  login(email: string, password: string): Observable<any> {
return  this.http
      .post(this.baseUrl + '/login', {email: email, password: password}, {headers: this.getHeaders()})

      .catch(response => {
        throw new Error('' + response.status);
      });


  }

  selectProfile(profile: string) {
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));
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
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));
    return currentUser && currentUser.token;
  }

  getLabels(): string[] {
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));
    return currentUser && currentUser.labels;
  }

  private getHeaders(): HttpHeaders {
    const headers = new HttpHeaders();
    headers.append('Accept', 'application/json');
    return headers;
  }

  private mapUser(response: any): Observable<string[]> {
    const token = response.token;
    const labels = response.labels;
    if (token) {
      localStorage.setItem('currentUser', JSON.stringify({labels: labels, token: token}));
    } else {
      throw new Error('Fejl ved login');
    }
    return Observable.of(labels);
  }

}
