/* tslint:disable:no-unused-variable */
import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {By} from '@angular/platform-browser';
import {DebugElement} from '@angular/core';
import {WebSite} from '../../../../model/site';
import {FormsModule} from '@angular/forms';
import {SiteService} from '../../../../services/site.service';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {BannerComponent} from './banner.component';
import {MaterialComponent} from '../../../../material.component';

describe('BannerComponent', () => {
  let component: BannerComponent;
  let fixture: ComponentFixture<BannerComponent>;

  class SiteServiceMock {

  }

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        MaterialComponent,
        FormsModule,
        BrowserAnimationsModule,
      ],
      declarations: [BannerComponent],
      providers: [
        {provide: SiteService, useClass: SiteServiceMock},
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BannerComponent);
    component = fixture.componentInstance;
    component.site = new WebSite('', false);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
