import { Component, OnInit } from '@angular/core';

import { AlertService } from '../../services/alert.service';

@Component({
    selector: 'alert',
    templateUrl: './alert.html'
})

export class Alert {
    message: any;

    constructor(private alertService: AlertService) { }

    ngOnInit() {
        this.alertService.getMessage().subscribe(message => { this.message = message; });
    }
}