import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NickXoGameComponent } from './nick-xo-game.component';

describe('NickXoGameComponent', () => {
  let component: NickXoGameComponent;
  let fixture: ComponentFixture<NickXoGameComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NickXoGameComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NickXoGameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
