import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KhanComponent } from './khan.component';

describe('KhanComponent', () => {
  let component: KhanComponent;
  let fixture: ComponentFixture<KhanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KhanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KhanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
