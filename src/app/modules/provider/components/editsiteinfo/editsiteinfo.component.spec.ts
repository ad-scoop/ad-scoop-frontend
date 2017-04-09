/* tslint:disable:no-unused-variable */
import { Area } from '../../../../model/area';
import { Demografi } from '../../../../model/demografi';
import { Gender } from '../../../../model/gender';
import { Industry } from '../../../../model/industry';
import { Organisation } from '../../../../model/organisation';
import { WebSite } from '../../../../model/site';
import { SiteService } from '../../../../services/site.service';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { MaterialModule } from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { fakeAsync, tick } from '@angular/core/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { EditSiteInfoComponent } from './editsiteinfo.component';

describe('EditsiteinfoComponent', () => {
  let component: EditSiteInfoComponent;
  let fixture: ComponentFixture<EditSiteInfoComponent>;

  class SiteServiceMock {
    industries: Industry[] = [];
  }

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        MaterialModule,
        FormsModule,
        ReactiveFormsModule,
        BrowserAnimationsModule,
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
    component.site = new WebSite('', '', false, new Demografi([Gender.Man]), new Area('', ''), new Organisation('test'));
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
