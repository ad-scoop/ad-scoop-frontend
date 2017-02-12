/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { BannerUpladComponent } from './banneruplad.component';

describe('BannerupladComponent', () => {
  let component: BannerUpladComponent;
  let fixture: ComponentFixture<BannerUpladComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BannerUpladComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BannerUpladComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
