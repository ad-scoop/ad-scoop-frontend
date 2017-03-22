import { RegistryComponent } from '../registry/registry.component'
import { Component, ViewContainerRef } from '@angular/core';
import { AuthenticationService } from './../../services/authentication.service';
import { AlertService } from './../../services/alert.service';
import { Router } from '@angular/router';
import { MdDialog, MdDialogConfig, MdDialogRef } from '@angular/material';
import { Observable } from 'rxjs';

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
      (data) => this.redirect(data),
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

  private redirect(profiles: string[]): void {
    this.selectProfile(profiles).subscribe(profile => {
      this.userServcie.selectProfile(profile);
      if (profile === AuthenticationService.ADVERTISER) {
        this.router.navigate(['/advertiser/campaigns']);
      } else if (profile === AuthenticationService.PROVIDER) {
        this.router.navigate(['/provider/site']);
      }
    });
  }

  private selectProfile(profiles: string[]): Observable<string> {
    let advertiser = profiles.filter(e => e === AuthenticationService.ADVERTISER)[0];
    let provider = profiles.filter(e => e === AuthenticationService.PROVIDER)[0];

    if (advertiser && provider) {
      return this.showDialog();
    }
    return Observable.of(advertiser ? advertiser : provider);
  }

  private showDialog(): Observable<string> {
    let config = new MdDialogConfig();
    config.viewContainerRef = this.viewContainerRef;
    this.dialogRef = this.dialog.open(ProfileDialogComponent, config);
    return this.dialogRef.afterClosed();
  }

}

@Component({
  templateUrl: './profile.dialog.component.html',
  styleUrls: ['./login.css']
})
export class ProfileDialogComponent {

  constructor(public dialogRef: MdDialogRef<ProfileDialogComponent>) { }

  selectAdvetiser(): void {
    this.dialogRef.close(AuthenticationService.ADVERTISER);
  }

  selectProvider(): void {
    this.dialogRef.close(AuthenticationService.PROVIDER);
  }

}

