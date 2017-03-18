/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivationComponent } from './activation.component';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { AlertService } from '../../services/alert.service'
import { UserService } from '../../services/user.service';
import { ActivatedRoute } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { Observable } from 'rxjs';


describe('ActivationComponent', () => {
  let component: ActivationComponent;
  let fixture: ComponentFixture<ActivationComponent>;

  class ActivatedRouteMock {

  }

  class UserServiceMock {
    public activate(token: string): Observable<boolean> {
      return Observable.of(true)
    }
  }

  class AlertServiceMock {

  }

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        ActivationComponent],
      imports: [
        RouterTestingModule.withRoutes([
          { path: '.', component: ActivationComponent },
        ])
      ],
      providers: [
        { provide: AlertService, useClass: AlertServiceMock },
        { provide: UserService, useClass: UserServiceMock },
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActivationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
