import { environment } from '../../environments/environment';
import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpResponse} from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class UserService {

  private baseUrl = environment.userUrl;

  constructor(private http: HttpClient) { }

  public create(newUser: any): Observable<boolean> {

    return this.http
      .post(this.baseUrl + '/create', newUser, { headers: this.getJsonHeaders() })
      .map((response: HttpResponse<boolean>) => {
        if (response.status < 200 || response.status >= 300) {
          throw new Error('' + response.status);
        } else {
          return true;
        }
      });
  }

  public activate(token: string): Observable<boolean> {
    return this.http
      .post(this.baseUrl + '/activate', token, {headers: this.getTextHeaders() })
      .map((response: HttpResponse<boolean>) => {
        if (response.status < 200 || response.status >= 300) {
          throw new Error('' + response.status);
        } else {
          return true;
        }
      });
  }

  private getJsonHeaders(): HttpHeaders {
    const headers = new HttpHeaders();
    headers.set('Accept', 'application/json');
    return headers;
  }

  private getTextHeaders(): HttpHeaders {
    const headers = new HttpHeaders();
    headers.append('Content-Type', 'text/html; charset=utf-8');
    return headers;
  }

}
