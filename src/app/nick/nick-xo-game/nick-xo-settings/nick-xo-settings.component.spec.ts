import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NickXoSettingsComponent } from './nick-xo-settings.component';

describe('NickXoSettingsComponent', () => {
  let component: NickXoSettingsComponent;
  let fixture: ComponentFixture<NickXoSettingsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NickXoSettingsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NickXoSettingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
