/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { SiteService } from './site.service';
import { Http } from '@angular/http';
import { AuthenticationService } from './authentication.service';

describe('SiteService', () => {

  class HttpMock {

  }

  class AuthenticationServiceMock {

  }

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SiteService,
        { provide: Http, useClass: HttpMock },
        { provide: AuthenticationService, useClass: AuthenticationServiceMock },
      ]
    });
  });

  it('should ...', inject([SiteService], (service: SiteService) => {
    expect(service).toBeTruthy();
  }));
});
