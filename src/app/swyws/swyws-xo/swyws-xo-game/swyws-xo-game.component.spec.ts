import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SwywsXoGameComponent } from './swyws-xo-game.component';

describe('SwywsXoGameComponent', () => {
  let component: SwywsXoGameComponent;
  let fixture: ComponentFixture<SwywsXoGameComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SwywsXoGameComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SwywsXoGameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
