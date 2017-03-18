/* tslint:disable:no-unused-variable */
import { WebSite } from '../../../../model/site';
import { AlertService } from '../../../../services/alert.service';
import { SiteService } from '../../../../services/site.service';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { MaterialModule, MdDialog } from '@angular/material';

import { SiteComponent } from './site.component';
import { Observable } from 'rxjs';
import { UrlSafePipe } from '../../../../utils/urlsafe.pipe';


describe('SiteComponent', () => {
  let component: SiteComponent;
  let fixture: ComponentFixture<SiteComponent>;

  class SiteServiceMock {
    sites(): Observable<WebSite[]> { return Observable.of([]); }
  }

  class AlertServiceMock {

  }

  class MdDialogMock {

  }

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        MaterialModule.forRoot(),
      ],
      declarations: [SiteComponent, UrlSafePipe],
      providers: [
        { provide: SiteService, useClass: SiteServiceMock },
        { provide: AlertService, useClass: AlertServiceMock },
        { provide: MdDialog, useClass: MdDialogMock },
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
