import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { DebugElement } from '@angular/core';
import { SiteService } from '../../../../services/site.service';

import { BannerMatcherComponent } from './bannermatcher.component';
import {MaterialComponent} from '../../../../material.component';

xdescribe('BannerMatcherComponent', () => {
  let component: BannerMatcherComponent;
  let fixture: ComponentFixture<BannerMatcherComponent>;

  class SiteServiceMock {
  }
  
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [MaterialComponent],
      declarations: [ BannerMatcherComponent ],
      providers: [
        { provide: SiteService, useClass: SiteServiceMock },
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BannerMatcherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
