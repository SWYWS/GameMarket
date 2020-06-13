import { TestBed } from '@angular/core/testing';

import { DataCheckersService } from './data-checkers.service';

describe('DataCheckersService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DataCheckersService = TestBed.get(DataCheckersService);
    expect(service).toBeTruthy();
  });
});
