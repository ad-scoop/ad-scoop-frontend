import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { AuthenticationService } from './../services/authentication.service';

@Injectable()
export class AdvertiserhGuard implements CanActivate {

    constructor( private userService: AuthenticationService, private router: Router ) { }

    canActivate( route: ActivatedRouteSnapshot, state: RouterStateSnapshot ) {
        if (this.userService.isLoggedIn) {
            return true;
        }
        this.router.navigate(['/login'], { queryParams: { returnUrl: state.url }});
        return false;
    }
P
}
