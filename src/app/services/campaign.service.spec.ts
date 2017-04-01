/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { CampaignService } from './campaign.service';
import { Http } from '@angular/http';
import { AuthenticationService } from './authentication.service';

describe('BannerService', () => {

  class HttpMock {

  }

  class AuthenticationServiceMock {

  }

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        CampaignService,
        { provide: Http, useClass: HttpMock },
        { provide: AuthenticationService, useClass: AuthenticationServiceMock },

      ]
    });
  });

  it('should ...', inject([CampaignService], (service: CampaignService) => {
    expect(service).toBeTruthy();
  }));
});
