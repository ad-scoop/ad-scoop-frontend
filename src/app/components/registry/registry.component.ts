import { User } from '../../model/user'
import { AlertService } from '../../services/alert.service'
import { UserService } from '../../services/user.service'
import { Component, OnInit, ElementRef } from '@angular/core';
import { MdDialog, MdDialogConfig, MdDialogRef } from '@angular/material';

@Component({
  selector: 'app-registry',
  templateUrl: './registry.component.html',
  styleUrls: ['./registry.component.css']
})
export class RegistryComponent implements OnInit {

  model: any = {};

  constructor(
    public dialogRef: MdDialogRef<any>,
    private userService: UserService,
    private alertService: AlertService) { }

  ngOnInit() {
    this.model.role = 'advetiser';
  }

  create(): void {
    this.userService.create(new User(this.model))
      .subscribe(
        (data) => this.alertService.error('Du er nu oprret, en mail med et aktiverings link er afsendt.'),
        (err) => {
          if (err.status === 409) {
            this.alertService.error('E-mail adressen findes i forvejen');
          } else {
            this.alertService.error('Fejl ved oprettelse');
          }
    });
  }

}
