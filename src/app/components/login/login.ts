import { RegistryComponent } from '../registry/registry.component'
import { Component, ViewContainerRef } from '@angular/core';
import { AuthenticationService } from './../../services/authentication.service';
import { AlertService } from './../../services/alert.service';
import { Router } from '@angular/router';
import { MdDialog, MdDialogConfig, MdDialogRef } from '@angular/material';

@Component({
  selector: 'login',
  templateUrl: './login.html',
  styleUrls: ['./login.css']
})

export class Login {

  dialogRef: MdDialogRef<any>;
  model: any = {};

  constructor(
    private router: Router,
    private userServcie: AuthenticationService,
    private alertService: AlertService,
    public dialog: MdDialog,
    public viewContainerRef: ViewContainerRef) { }

  login() {
    this.userServcie.login(this.model.email, this.model.password)
      .subscribe(
      (data) => this.redirect(),
      (err) => this.alertService.error('E-mail eller password er forkert!')
      );
  }

  registry(): void {
    let config = new MdDialogConfig();
    config.viewContainerRef = this.viewContainerRef;

    this.dialogRef = this.dialog.open(RegistryComponent, config);
    this.dialogRef.afterClosed().subscribe(result => {
      this.dialogRef = null;
    });
  }

  private redirect(): void {
    if (this.userServcie.isLoggedInAsAdvertiser()) {
      this.router.navigate(['/advertiser/campaigns']);
    } else if (this.userServcie.isLoggedAsProvider()) {
      this.router.navigate(['/provider/site']);
    }
  }

}
