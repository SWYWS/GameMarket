import { TestBed } from '@angular/core/testing';

import { KhanXoLogicalService } from './khan-xo-logical.service';

describe('KhanXoLogicalService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: KhanXoLogicalService = TestBed.get(KhanXoLogicalService);
    expect(service).toBeTruthy();
  });
});
