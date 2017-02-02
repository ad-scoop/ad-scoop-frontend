import { Component } from '@angular/core';
import { UserService } from './../../services/user.service';
import { Router } from '@angular/router';

@Component( {
    selector: 'login',
    templateUrl: './login.html',
    styleUrls: ['./login.css']
})

export class Login {

    model: any = {};

    constructor( private router: Router, private userServcie: UserService ) { }

    login() {
        this.userServcie.login( this.model.email, this.model.password )
            .subscribe( result => {
                if ( result === true) {
                    this.redirect();
                } else {
                }
            });
    }

    private redirect(): void {
        if ( this.userServcie.isLoggedInAsAdvertiser() ) {
            this.router.navigate( ['/advertiser/planning'] );
        } else if ( this.userServcie.isLoggedAsProvider() ) {
            this.router.navigate( ['/provider/planning'] );
        }
    }


}
