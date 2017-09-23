import {TestBed, async} from '@angular/core/testing';
import {TopMenuComponent, TopMenuButtonComponent, MenuItem} from './top.menu.component';
import {AuthenticationService} from '../../services/authentication.service';
import {RouterTestingModule} from '@angular/router/testing';
import {MaterialComponent} from '../../material.component';
import {EventService} from './../../services/event.service';

describe('TopMenuComponent', () => {

  class AuthenticationServiceMock {
    isNotLoggedIn(): boolean {return false;}
    isLoggedInAsAdvertiser(): boolean {return true;}
    isLoggedAsProvider(): boolean {return true;}
    isLoggedIn(): boolean {return true;}
  }

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        MaterialComponent,
        RouterTestingModule.withRoutes([
          {path: 'underConstruction', component: TopMenuComponent},
          {path: 'login', component: TopMenuComponent},
          {path: '.', component: TopMenuComponent}
        ]), 
      ],
      declarations: [
        TopMenuButtonComponent,
        TopMenuComponent,
      ],
      providers: [
        {provide: AuthenticationService, useClass: AuthenticationServiceMock},
        {provide: EventService, useClass: EventService},
      ],
    });
    TestBed.compileComponents();
  });

  it('should create the app', async(() => {
    let fixture = TestBed.createComponent(TopMenuComponent);
    let menu = fixture.debugElement.componentInstance;
    menu.menu = [new MenuItem('', '')];
    fixture.detectChanges();
    expect(menu).toBeTruthy();
  }));

});
