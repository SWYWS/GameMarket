import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KhanXoFieldComponent } from './khan-xo-field.component';

describe('KhanXoFieldComponent', () => {
  let component: KhanXoFieldComponent;
  let fixture: ComponentFixture<KhanXoFieldComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KhanXoFieldComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KhanXoFieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
