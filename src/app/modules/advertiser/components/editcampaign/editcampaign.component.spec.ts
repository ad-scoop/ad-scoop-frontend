/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { Campaign } from '../../../../model/campaign';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from '@angular/material';

import { EditCampaignComponent } from './editcampaign.component';

describe('CreatecampaignComponent', () => {
  let component: EditCampaignComponent;
  let fixture: ComponentFixture<EditCampaignComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditCampaignComponent ],
      imports: [
        MaterialModule.forRoot(),
        FormsModule,  
      ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditCampaignComponent);
    component = fixture.componentInstance;
    component.campaign = new Campaign();
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
