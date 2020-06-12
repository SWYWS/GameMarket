import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SwywsMinesweeperSettingsComponent } from './swyws-minesweeper-settings.component';

describe('SwywsMinesweeperSettingsComponent', () => {
  let component: SwywsMinesweeperSettingsComponent;
  let fixture: ComponentFixture<SwywsMinesweeperSettingsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SwywsMinesweeperSettingsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SwywsMinesweeperSettingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
