import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, CanActivateChild } from '@angular/router';
import { UserService } from './../services/user.service';


@Injectable()
export class AdvertiserGuard implements CanActivate, CanActivateChild {

    constructor( private userService: UserService, private router: Router ) { }

    canActivate( route: ActivatedRouteSnapshot, state: RouterStateSnapshot ) {
        if (this.userService.isLoggedIn()) {
            return true;
        }
        this.router.navigate(['/login']);
        return false;
    }

    canActivateChild(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
        return this.canActivate(route, state);
      }
    
}
