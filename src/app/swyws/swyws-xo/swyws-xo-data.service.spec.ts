import { TestBed } from '@angular/core/testing';

import { SwywsXoDataService } from './swyws-xo-data.service';

describe('SwywsXoDataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SwywsXoDataService = TestBed.get(SwywsXoDataService);
    expect(service).toBeTruthy();
  });
});
