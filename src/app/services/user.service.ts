import { environment } from '../../environments/environment'
import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http'
import { Observable } from 'rxjs'

@Injectable()
export class UserService {

  private baseUrl = environment.userUrl;

  constructor(private http: Http) { }

  create(newUser: any): Observable<boolean> {
      return this.http
              .post(`${this.baseUrl}/create`, newUser, this.getHeaders())
              .map(response => {
                  if (response.status < 200 || response.status >= 300) {
                    throw new Error('' + response.status);
                  } else {
                    return true;
                  }
              });
  }

  private getHeaders(): Headers {
        let headers = new Headers();
        headers.append('Accept', 'application/json');
        return headers;
  }

}
