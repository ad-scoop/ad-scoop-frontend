/* tslint:disable:no-unused-variable */
import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {By} from '@angular/platform-browser';
import {DebugElement} from '@angular/core';
import {AlertService} from '../../../../services/alert.service'
import {FormsModule} from '@angular/forms';
import {BannerComponent} from '../banner/banner.component';
import {Campaign} from '../../../../model/campaign';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {BannerUploadComponent} from './bannerupload.component';
import {Observable} from 'rxjs/Observable';
import {MaterialModule} from '../../../../material.module';

describe('BannerUploadComponent', () => {
  let component: BannerUploadComponent;
  let fixture: ComponentFixture<BannerUploadComponent>;

  class AlertServiceMock {
    getMessage(): Observable<any> {return Observable.of('');}
  }

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        BannerUploadComponent,
        BannerComponent,
      ],
      imports: [
        MaterialModule,
        FormsModule,
        BrowserAnimationsModule,
      ],
      providers: [
        {provide: AlertService, useClass: AlertServiceMock},
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BannerUploadComponent);
    component = fixture.componentInstance;
    component.campaign = new Campaign(0);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
