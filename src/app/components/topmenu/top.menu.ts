import { Component, ViewEncapsulation } from '@angular/core';
import { UserService } from './../../services/user.service';
import { Router } from '@angular/router';

@Component( {
    selector: 'top-menu',
    templateUrl: './top.menu.html',
    styleUrls: ['./top.menu.css'],
    encapsulation: ViewEncapsulation.None,
})
export class TopMenu {

    constructor(public userService: UserService, private router: Router, ) { }

    logout() {
        this.userService.logout();
        this.router.navigate( ['/'] );
    }

    
}
