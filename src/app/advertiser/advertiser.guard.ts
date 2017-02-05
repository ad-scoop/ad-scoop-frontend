import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, CanActivateChild } from '@angular/router';
import { UserService } from './../services/user.service';
import { Observable } from 'rxjs';


@Injectable()
export class AdvertiserGuard implements CanActivate, CanActivateChild {

    constructor( private userService: UserService, private router: Router ) { }

    canActivate( route: ActivatedRouteSnapshot, state: RouterStateSnapshot ): Observable<boolean> {
//        if (this.userService.isLoggedIn()) {
//            return Observable.of(true);
//        }
//        this.router.navigate(['/login']);
        return Observable.of(true);
    }

    canActivateChild(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
        return this.canActivate(route, state);
      }

}
