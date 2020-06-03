import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SwywsMinesweeperComponent } from './swyws-minesweeper.component';

describe('SwywsMinesweeperComponent', () => {
  let component: SwywsMinesweeperComponent;
  let fixture: ComponentFixture<SwywsMinesweeperComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SwywsMinesweeperComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SwywsMinesweeperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
