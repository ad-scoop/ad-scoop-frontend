/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { CampaignService } from './campaign.service';
import { AuthenticationService } from './authentication.service';
import { HttpClient } from '@angular/common/http';

describe('CampaignService', () => {

  class HttpMock {

  }

  class AuthenticationServiceMock {

  }

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        CampaignService,
        { provide: HttpClient, useClass: HttpMock },
        { provide: AuthenticationService, useClass: AuthenticationServiceMock },

      ]
    });
  });

  it('should ...', inject([CampaignService], (service: CampaignService) => {
    expect(service).toBeTruthy();
  }));
});
