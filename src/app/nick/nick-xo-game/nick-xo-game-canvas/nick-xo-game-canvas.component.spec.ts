import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NickXoGameCanvasComponent } from './nick-xo-game-canvas.component';

describe('NickXoGameCanvasComponent', () => {
  let component: NickXoGameCanvasComponent;
  let fixture: ComponentFixture<NickXoGameCanvasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NickXoGameCanvasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NickXoGameCanvasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
