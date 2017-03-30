/* tslint:disable:no-unused-variable */
import { Area } from '../../../../model/area';
import { Demografi } from '../../../../model/demografi';
import { Gender } from '../../../../model/gender';
import { WebSite } from '../../../../model/site';
import { UrlSafePipe } from '../../../../utils/urlsafe.pipe';
import { EditSiteComponent } from '../editsite/editsite.component';
import { EditSiteInfoComponent } from '../editsiteinfo/editsiteinfo.component';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { MaterialModule, MdDialogRef } from '@angular/material';

import { EditDialogComponent } from './editdialog.component';
import { FormsModule } from '@angular/forms';

describe('EditdialogComponent', () => {
  let component: EditDialogComponent;
  let fixture: ComponentFixture<EditDialogComponent>;

  class MdDialogRefMock {

  }

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        MaterialModule.forRoot(),
        FormsModule
      ],
      declarations: [
        EditDialogComponent,
        EditSiteComponent,
        UrlSafePipe,
        EditSiteInfoComponent
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
    component.site = new WebSite('', '', true, new Demografi(Gender.Children), new Area('', ''));
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
