import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SwywsMinesweeperGameComponent } from './swyws-minesweeper-game.component';

describe('SwywsMinesweeperGameComponent', () => {
  let component: SwywsMinesweeperGameComponent;
  let fixture: ComponentFixture<SwywsMinesweeperGameComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SwywsMinesweeperGameComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SwywsMinesweeperGameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
