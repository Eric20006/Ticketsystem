import { TestBed } from '@angular/core/testing';

import { ConsumerShowUserService } from './consumer-show-user.service';

describe('ConsumerShowUserService', () => {
  let service: ConsumerShowUserService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ConsumerShowUserService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
