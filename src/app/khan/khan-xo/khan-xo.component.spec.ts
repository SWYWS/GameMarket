import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KhanXoComponent } from './khan-xo.component';

describe('KhanXoComponent', () => {
  let component: KhanXoComponent;
  let fixture: ComponentFixture<KhanXoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KhanXoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KhanXoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
