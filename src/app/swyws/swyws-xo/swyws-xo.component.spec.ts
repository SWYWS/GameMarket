import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SwywsXoComponent } from './swyws-xo.component';

describe('SwywsXoComponent', () => {
  let component: SwywsXoComponent;
  let fixture: ComponentFixture<SwywsXoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SwywsXoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SwywsXoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
