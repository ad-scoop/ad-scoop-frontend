import { Injectable } from '@angular/core';
import { Http, Response,Headers } from '@angular/http';
import { Observable } from 'rxjs/Rx';

import { User } from './../model/user';
import { UserRole } from './../model/user.role';

@Injectable()
export class UserService {

    private token: string;
    private labels: string[];
    
    private baseUrl: string = 'http://localhost:8181/user';

    constructor(private http : Http) {
        var currentUser = JSON.parse(localStorage.getItem('currentUser'));
        this.token = currentUser && currentUser.token;
        this.labels = currentUser && currentUser.labels;
    }

    login( email: string, password: string ): Observable<boolean> {
        return this.http
            .post(`${this.baseUrl}/login`, { email: email, password: password }, this.getHeaders())
            .map(this.mapUser);
    }

    logout(): void {
        this.token = null;
        this.labels = null;
    }

    isLoggedIn(): boolean {
        return this.token != null;
    }

    isNotLoggedIn(): boolean {
        return this.token == null;
    }

    isLoggedInAsAdvertiser(): boolean  {
        return this.isLoggedIn() && this.labels.find(e => e === 'advertiser') != undefined;
    }

    isLoggedAsProvider(): boolean  {
        return this.isLoggedIn() && this.labels.find(e => e === 'provider') != undefined;
    }
    
    private getHeaders(){
        let headers = new Headers();
        headers.append('Accept', 'application/json');
        return headers;
    }
    
    private mapUser(response: Response): boolean {
        this.token = response.json().token;
        this.labels = response.json().labels;
        if (this.token) {
            localStorage.setItem('currentUser', JSON.stringify({ labels: this.labels, token: this.token }));        
            return true;
        }
        return false;
     }
    
}

