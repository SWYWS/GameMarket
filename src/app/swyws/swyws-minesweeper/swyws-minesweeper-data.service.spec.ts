import { TestBed } from '@angular/core/testing';

import { SwywsMinesweeperDataService } from './swyws-minesweeper-data.service';

describe('SwywsMinesweeperDataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SwywsMinesweeperDataService = TestBed.get(SwywsMinesweeperDataService);
    expect(service).toBeTruthy();
  });
});
