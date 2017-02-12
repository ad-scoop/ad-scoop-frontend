import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, CanActivateChild } from '@angular/router';
import { AuthenticationService } from './../../services/authentication.service';
import { Observable } from 'rxjs';


@Injectable()
export class ProviderGuard implements CanActivate, CanActivateChild {

    constructor( private userService: AuthenticationService, private router: Router ) { }

    canActivate( route: ActivatedRouteSnapshot, state: RouterStateSnapshot ): Observable<boolean> {
        if (this.userService.isLoggedIn()) {
            return Observable.of(true);
        }
        this.router.navigate(['/login']);
        return Observable.of(false);
    }

    canActivateChild(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
        return this.canActivate(route, state);
      }

}
