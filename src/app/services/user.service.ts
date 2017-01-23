import { Injectable } from '@angular/core';
import { Router } from '@angular/router';


import { User } from './../model/user';
import { UserRole } from './../model/user.role';

@Injectable()
export class UserService {

    private user: User | null;

    private redirectUrl: string;

    constructor(private router : Router) { }

    login( email: string, password: string ): boolean {
        this.user = new User( email, UserRole.advertiser );
        this.router.navigate( ['/advertiser/planning'] );
        return true;
    }

    logout(): void {
        this.user = null;
        this.router.navigate( ['/'] );
    }

    isLoggedIn(): boolean {
        return this.user != null;
    }

    isNotLoggedIn(): boolean {
        return this.user == null;
    }

    isLoggedInAsAdvertiser() {
        return this.isLoggedIn() && this.user.role == UserRole.advertiser;
    }

    isLoggedAsProvider() {
        return this.isLoggedIn() && this.user.role == UserRole.provider;
    }

}