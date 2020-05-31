import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SwywsComponent } from './swyws.component';

describe('SwywsComponent', () => {
  let component: SwywsComponent;
  let fixture: ComponentFixture<SwywsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SwywsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SwywsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
