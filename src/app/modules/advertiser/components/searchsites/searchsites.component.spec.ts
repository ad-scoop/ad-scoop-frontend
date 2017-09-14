/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CampaignService } from '../../../../services/campaign.service';
import { Campaign } from '../../../../model/campaign';
import { SiteComponent } from '../site/site.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SiteService } from '../../../../services/site.service';
import { Observable } from 'rxjs/Observable';
import { WebSite } from '../../../../model/site';

import { SearchsitesComponent } from './searchsites.component';
import {MaterialModule} from '../../../../material.module';

describe('SearchSitesComponent', () => {
  let component: SearchsitesComponent;
  let fixture: ComponentFixture<SearchsitesComponent>;

  class CampaignServiceMock {

  }
  
  class SiteServiceMock {
    industries = [];
    serche(): Observable<WebSite[]> {
      return Observable.of([]);
    }
    
    sercheByIds(ids: number[]): Observable<WebSite[]> {
      return Observable.of([]);
    }
    
  }

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        SearchsitesComponent,
        SiteComponent
      ],
      imports: [
        MaterialModule,
        FormsModule,
        BrowserAnimationsModule,
      ],
      providers: [
        { provide: CampaignService, useClass: CampaignServiceMock },
        { provide: SiteService, useClass: SiteServiceMock },
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchsitesComponent);
    component = fixture.componentInstance;
    component.campaign = new Campaign(0);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
