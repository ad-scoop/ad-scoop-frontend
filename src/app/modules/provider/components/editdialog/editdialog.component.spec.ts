/* tslint:disable:no-unused-variable */
import { EditSiteComponent } from '../editsite/editsite.component';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { MaterialModule, MdDialogRef } from '@angular/material';

import { EditDialogComponent } from './editdialog.component';

describe('EditdialogComponent', () => {
  let component: EditDialogComponent;
  let fixture: ComponentFixture<EditDialogComponent>;

  class MdDialogRefMock {

  }

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        MaterialModule.forRoot(),
      ],
      declarations: [
        EditDialogComponent,
        EditSiteComponent
      ],
      providers: [
        { provide: MdDialogRef, useClass: MdDialogRefMock },
      ]

    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
