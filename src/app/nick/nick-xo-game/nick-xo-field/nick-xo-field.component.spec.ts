import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NickXoFieldComponent } from './nick-xo-field.component';

describe('NickXoFieldComponent', () => {
  let component: NickXoFieldComponent;
  let fixture: ComponentFixture<NickXoFieldComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NickXoFieldComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NickXoFieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
