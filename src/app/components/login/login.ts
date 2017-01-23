import { Component } from '@angular/core';
import { UserService } from './../../services/user.service';

@Component( {
    selector: 'login',
    templateUrl: './login.html',
    styleUrls: ['./login.css']
})

export class Login {
    
    model: any = {};

    constructor(private userServcie: UserService) { }
    
    login() {
        this.userServcie.login(this.model.email, this.model.password);
    }
    
}
