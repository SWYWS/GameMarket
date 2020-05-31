import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SwywsXoSettingsComponent } from './swyws-xo-settings.component';

describe('SwywsXoSettingsComponent', () => {
  let component: SwywsXoSettingsComponent;
  let fixture: ComponentFixture<SwywsXoSettingsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SwywsXoSettingsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SwywsXoSettingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
