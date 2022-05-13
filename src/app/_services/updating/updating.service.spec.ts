import { TestBed } from '@angular/core/testing';

import { UpdatingService } from './updating.service';

describe('UpdatingService', () => {
  let service: UpdatingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UpdatingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
