/* tslint:disable:no-unused-variable */
import { Area } from '../../../../model/area';
import { Demografi } from '../../../../model/demografi';
import { Gender } from '../../../../model/gender';
import { WebSite } from '../../../../model/site';
import { SiteService } from '../../../../services/site.service';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { MaterialModule } from '@angular/material';
import { FormsModule } from '@angular/forms';

import { EditSiteInfoComponent } from './editsiteinfo.component';

describe('EditsiteinfoComponent', () => {
  let component: EditSiteInfoComponent;
  let fixture: ComponentFixture<EditSiteInfoComponent>;

  class SiteServiceMock {
  }

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        MaterialModule.forRoot(),
        FormsModule
      ],
      declarations: [EditSiteInfoComponent],
      providers: [
        { provide: SiteService, useClass: SiteServiceMock },
      ]

    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditSiteInfoComponent);
    component = fixture.componentInstance;
    component.site = new WebSite('', '', false, new Demografi(Gender.Man), new Area('', ''));
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
