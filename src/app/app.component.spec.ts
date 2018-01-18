/* tslint:disable:no-unused-variable */

import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { TopMenuComponent, TopMenuButtonComponent } from './components/topmenu/top.menu.component';
import { Alert } from './components/alert/alert';
import { Home } from './components/home/home';
import { RouterTestingModule } from '@angular/router/testing';
import { AuthenticationService } from './services/authentication.service';
import { AlertService } from './services/alert.service';
import { Observable } from 'rxjs/Observable';
import { MaterialComponent } from './material.component';
import { EventService } from './services/event.service';
import { HttpClientModule } from '@angular/common/http';


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
        MaterialComponent,
        HttpClientModule,
      ],
      declarations: [
        AppComponent,
        TopMenuComponent,
        TopMenuButtonComponent,
        Alert,
      ],
      providers: [
        { provide: AuthenticationService, useClass: AuthenticationServiceMock },
        { provide: AlertService, useClass: AlertServiceMock },
        { provide: EventService, useClass: EventService },
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
    expect(app.title).toEqual('ad-scoop');
  }));

});
