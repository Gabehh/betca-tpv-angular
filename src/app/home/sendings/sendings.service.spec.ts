import { TestBed } from '@angular/core/testing';

import { SendingsService } from './sendings.service';

describe('SendingsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SendingsService = TestBed.get(SendingsService);
    expect(service).toBeTruthy();
  });
});
