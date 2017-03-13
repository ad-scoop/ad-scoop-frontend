/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed, BrowserDynamicTestingModule } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { MaterialModule } from '@angular/material';
import { FormsModule } from '@angular/forms';
import { MdDialogRef } from '@angular/material';
import { UserService } from '../../services/user.service'
import { AlertService } from '../../services/alert.service'

import { RegistryComponent } from './registry.component';

describe('RegistryComponent', () => {
  let component: RegistryComponent;
  let fixture: ComponentFixture<RegistryComponent>;
  
  class AlertServiceMock {
    getMessage(): Observable<any> { return Observable.of(''); } 
  }
  
  class UserServiceMock {
    
  }
  
  class MdDialogRefMock {
    
  }
  
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        MaterialModule.forRoot(),
        FormsModule,
      ],
      declarations: [RegistryComponent]
      providers: [
         { provide: MdDialogRef, useClass: MdDialogRefMock },
         { provide: UserService, useClass: UserServiceMock },
         { provide: AlertService, useClass: AlertServiceMock },
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
