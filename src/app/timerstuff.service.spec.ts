import { TestBed } from '@angular/core/testing';

import { TimerstuffService } from './timerstuff.service';

describe('TimerstuffService', () => {
  let service: TimerstuffService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TimerstuffService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
