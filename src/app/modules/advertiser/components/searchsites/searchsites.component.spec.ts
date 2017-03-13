/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from '@angular/material';
import { CampaignService } from '../../../../services/campaign.service';
import { Campaign } from '../../../../model/campaign';
import { SiteComponent } from '../site/site.component';

import { SearchsitesComponent } from './searchsites.component';

describe('SearchsitesComponent', () => {
  let component: SearchsitesComponent;
  let fixture: ComponentFixture<SearchsitesComponent>;

  class CampaignServiceMock {
    
  }
  
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        SearchsitesComponent,
        SiteComponent,],
      imports: [
        MaterialModule.forRoot(),
        FormsModule,
      ],
      providers: [
         { provide: CampaignService, useClass: CampaignServiceMock },
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchsitesComponent);
    component = fixture.componentInstance;
    component.campaign = new Campaign();
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
