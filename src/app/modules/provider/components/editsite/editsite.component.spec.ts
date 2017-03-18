/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { MdDialogRef } from '@angular/material';
import { MaterialModule } from '@angular/material';

import { EditSiteComponent } from './editsite.component';

describe('EditsiteComponent', () => {
  let component: EditSiteComponent;
  let fixture: ComponentFixture<EditSiteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        MaterialModule.forRoot(),
      ],
      declarations: [EditSiteComponent],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditSiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
