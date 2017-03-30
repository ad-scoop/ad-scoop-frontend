/* tslint:disable:no-unused-variable */
import { WebSite } from '../../../../model/site';
import { UrlSafePipe } from '../../../../utils/urlsafe.pipe';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { MdDialogRef } from '@angular/material';
import { MaterialModule } from '@angular/material';

import { EditSiteComponent } from './editsite.component';
import { FormsModule } from '@angular/forms';

describe('EditsiteComponent', () => {
  let component: EditSiteComponent;
  let fixture: ComponentFixture<EditSiteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        MaterialModule.forRoot(),
        FormsModule
      ],
      declarations: [EditSiteComponent, UrlSafePipe],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditSiteComponent);
    component = fixture.componentInstance;
    component.site = new WebSite('', '', true);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
