import { TestBed } from '@angular/core/testing';

import { NickXoLogicService } from './nick-xo-logic.service';

describe('NickXoLogicService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NickXoLogicService = TestBed.get(NickXoLogicService);
    expect(service).toBeTruthy();
  });
});
