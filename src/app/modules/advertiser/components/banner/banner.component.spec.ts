/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { MdDialog } from '@angular/material';

import { BannerComponent } from './banner.component';

describe('BannerlistComponent', () => {
  let component: BannerComponent;
  let fixture: ComponentFixture<BannerComponent>;

  class MdDialogMock {

  }

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [BannerComponent],
      providers: [
        { provide: MdDialog, useClass: MdDialogMock },
      ]

    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
