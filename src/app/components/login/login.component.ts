import { EventService, Event } from '../../services/event.service';
import {FormControl, Validators, FormGroup} from '@angular/forms';
import {RegistryComponent} from '../registry/registry.component';
import {Component, Inject, ViewContainerRef} from '@angular/core';
import {AuthenticationService} from './../../services/authentication.service';
import {AlertService} from './../../services/alert.service';
import {Router} from '@angular/router';
import {MAT_DIALOG_DATA, MatDialog, MatDialogConfig, MatDialogRef} from '@angular/material/dialog';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/of';

@Component({
  templateUrl: './profile.dialog.component.html',
  styleUrls: ['./login.component.css']
})
export class ProfileDialogComponent {

  constructor(public dialogRef: MatDialogRef<ProfileDialogComponent>, @Inject(MAT_DIALOG_DATA) data: any) {}

  selectAdvetiser(): void {
    this.dialogRef.close(AuthenticationService.ADVERTISER);
  }

  selectProvider(): void {
    this.dialogRef.close(AuthenticationService.PROVIDER);
  }

}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent {

  dialogRef: MatDialogRef<any>;
  model: any = {};

  loginForm = new FormGroup({
    email: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required])
  });

  constructor(
    private router: Router,
    private userServcie: AuthenticationService,
    private alertService: AlertService,
    public dialog: MatDialog,
    public viewContainerRef: ViewContainerRef,
    private eventService: EventService) {}

  login() {
    this.userServcie.login(this.loginForm.controls.email.value, this.loginForm.controls.password.value)
      .subscribe(
      (data) => {  console.log(data.labels);
                        this.redirect(this.mapUser(data));
                          },
      (err) => this.alertService.error('E-mail eller password er forkert!')
      );
  }

  registry(): void {
    const config = new MatDialogConfig();
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
        this.router.navigate(['/advertiser/home']);
      } else if (profile === AuthenticationService.PROVIDER) {
        this.router.navigate(['/provider/home']);
      }
      this.eventService.sendEvent(null);
    });
  }

  private selectProfile(profiles: string[]): Observable<string> {
    const advertiser = profiles.filter(e => e === AuthenticationService.ADVERTISER)[0];
    const provider = profiles.filter(e => e === AuthenticationService.PROVIDER)[0];

    if (advertiser && provider) {
      return this.showDialog();
    }
    return Observable.of(advertiser ? advertiser : provider);
  }

  private showDialog(): Observable<string> {
    const config = new MatDialogConfig();
    config.viewContainerRef = this.viewContainerRef;
    this.dialogRef = this.dialog.open(ProfileDialogComponent, config);
    return this.dialogRef.afterClosed();
  }


  private mapUser(response: any): string[] {
    const token = response.token;
    const labels = response.labels;
    if (token) {
      localStorage.setItem('currentUser', JSON.stringify({labels: labels, token: token}));
    } else {
      throw new Error('Fejl ved login');
    }
    return labels;
  }

}

