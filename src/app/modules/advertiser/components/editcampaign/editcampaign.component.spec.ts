/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { Campaign } from '../../../../model/campaign';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { EditCampaignComponent } from './editcampaign.component';

describe('EditCampaignComponent', () => {
  let component: EditCampaignComponent;
  let fixture: ComponentFixture<EditCampaignComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [EditCampaignComponent],
      imports: [
        MaterialModule.forRoot(),
        FormsModule,
        BrowserAnimationsModule,
      ],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditCampaignComponent);
    component = fixture.componentInstance;
    component.campaign = new Campaign(0);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
