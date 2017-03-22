import { User } from '../../model/user'
import { AlertService } from '../../services/alert.service'
import { AuthenticationService } from '../../services/authentication.service';
import { UserService } from '../../services/user.service'
import { Component, Input, OnInit, ElementRef } from '@angular/core';
import { Validator, AbstractControl } from '@angular/forms'
import { MdDialog, MdDialogConfig, MdDialogRef } from '@angular/material';

@Component({
  selector: 'app-registry',
  templateUrl: './registry.component.html',
  styleUrls: ['./registry.component.css']
})
export class RegistryComponent implements OnInit {

  @Input() passwordtest: string;
  @Input() password: string;

  model: any = {};

  constructor(
    public dialogRef: MdDialogRef<any>,
    private userService: UserService,
    private alertService: AlertService) { }

  ngOnInit() {
    this.model.labels = [];
  }

  changeLabelAdvertiser(): void {
    this.changeLabel(AuthenticationService.ADVERTISER);
  }

  changeLabelProvider(): void {
    this.changeLabel(AuthenticationService.PROVIDER);
  }

  changeLabel(label: string): void {
    let index = this.model.labels.indexOf(label);
    if (index > -1) {
      this.model.labels.splice(index, 1);
    } else {
      this.model.labels.push(label);
    }
  }

  create(): void {
    this.userService.create(new User(this.model))
      .subscribe(
      (data) => {
        this.dialogRef.close();
        this.alertService.success('Du bliver nu afsendt en mail med et aktiverings link.');
      },
      (err) => {
        if (err.status === 409) {
          this.alertService.error('E-mail adressen findes i forvejen');
        } else {
          this.alertService.error('Fejl ved oprettelse');
        }
      });
  }

}
