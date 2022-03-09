import { TestBed } from '@angular/core/testing';

import { ActiveUserInfoService } from './active-user-info.service';

describe('ActiveUserInfoService', () => {
  let service: ActiveUserInfoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ActiveUserInfoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
