/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { UserService } from './user.service';
import { Http } from '@angular/http';

describe('UserService', () => {

  class HttpMock {

  }

  class MockUserService {

  }

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        { provide: UserService, useClass: MockUserService },
        { provide: Http, useClass: HttpMock },
      ]
    });
  });

  it('should ...', inject([UserService], (service: UserService) => {
    expect(service).toBeTruthy();
  }));

});
