/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { SiteService } from './site.service';
import { AuthenticationService } from './authentication.service';
import { HttpClient } from '@angular/common/http';

describe('SiteService', () => {

  class HttpMock {

  }

  class AuthenticationServiceMock {

  }

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        SiteService,
        { provide: HttpClient, useClass: HttpMock },
        { provide: AuthenticationService, useClass: AuthenticationServiceMock },
      ]
    });
  });

  it('should ...', inject([SiteService], (service: SiteService) => {
    expect(service).toBeTruthy();
  }));

});
