/* tslint:disable:no-unused-variable */

import { TestBed, async } from '@angular/core/testing';
import { TopMenu } from './top.menu';
import { AuthenticationService } from '../../services/authentication.service';
import { MaterialModule } from '@angular/material';
import { RouterTestingModule } from '@angular/router/testing';


describe('AppComponent', () => {
  
  class AuthenticationServiceMock {
    isNotLoggedIn(): boolean { return false; }
    isLoggedInAsAdvertiser(): boolean { return true; }
    isLoggedIn(): boolean { return true; }
  }
  
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        MaterialModule.forRoot(),
        RouterTestingModule.withRoutes([
          { path: 'underConstruction', component: TopMenu },
          { path: 'login', component: TopMenu },
          { path: '.', component: TopMenu }
        ]),
      ]
      declarations: [
        TopMenu
      ],
      providers: [
         { provide: AuthenticationService, useClass: AuthenticationServiceMock },
      ],
    });
    TestBed.compileComponents();
  });

  it('should create the app', async(() => {
    let fixture = TestBed.createComponent(TopMenu);
    fixture.detectChanges();
    let menu = fixture.debugElement.componentInstance;
    expect(menu).toBeTruthy();
  }));

});
