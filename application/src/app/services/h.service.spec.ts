import { TestBed } from '@angular/core/testing';

import { HService } from './h.service';

describe('HService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: HService = TestBed.get(HService);
    expect(service).toBeTruthy();
  });
});
