import { environment } from '../../environments/environment'
import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http'
import { Observable } from 'rxjs'

@Injectable()
export class UserService {

  private baseUrl = environment.userUrl;

  constructor(private http: Http) { }

  public create(newUser: any): Observable<boolean> {
    return this.http
      .post(this.baseUrl + '/create', newUser, this.getJsonHeaders())
      .map(response => {
        if (response.status < 200 || response.status >= 300) {
          throw new Error('' + response.status);
        } else {
          return true;
        }
      });
  }

  public activate(token: string): Observable<boolean> {
    return this.http
      .post(this.baseUrl + '/activate', token, this.getTextHeaders())
      .map(response => {
        if (response.status < 200 || response.status >= 300) {
          throw new Error('' + response.status);
        } else {
          return true;
        }
      });
  }

  private getJsonHeaders(): Headers {
    let headers = new Headers();
    headers.append('Accept', 'application/json');
    return headers;
  }

  private getTextHeaders(): Headers {
    let headers = new Headers();
    headers.append('Content-Type', 'text/html; charset=utf-8');
    return headers;
  }

}
