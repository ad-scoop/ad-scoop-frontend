/* tslint:disable:no-unused-variable */

import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { TopMenu } from './components/topmenu/top.menu';
import { Alert } from './components/alert/alert';
import { Home } from './components/home/home';
import { RouterTestingModule } from '@angular/router/testing';
import { MaterialModule } from '@angular/material';
import { AuthenticationService } from './services/authentication.service';
import { AlertService } from './services/alert.service';
import { Observable } from 'rxjs/Observable';


describe('AppComponent', () => {
  class AuthenticationServiceMock {
    isNotLoggedIn(): boolean { return false; }
    isLoggedAsProvider(): boolean { return true; }
    isLoggedInAsAdvertiser(): boolean { return true; }
    isLoggedIn(): boolean { return true; }
  }
  class AlertServiceMock {
    getMessage(): Observable<any> { return Observable.of(''); }
  }

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule.withRoutes([
          { path: 'underConstruction', component: AppComponent },
          { path: 'login', component: AppComponent },
          { path: '.', component: AppComponent }
        ]),
        MaterialModule.forRoot(),
      ],
      declarations: [
        AppComponent,
        TopMenu,
        Alert,
      ],
      providers: [
        { provide: AuthenticationService, useClass: AuthenticationServiceMock },
        { provide: AlertService, useClass: AlertServiceMock },
      ]
    });
    TestBed.compileComponents();
  });

  it('should create the app', async(() => {
    let fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    let app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

  it(`should have as title 'app works!'`, async(() => {
    let fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    let app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('app works!');
  }));

});
