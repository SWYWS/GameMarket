import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KhanXoSettingsComponent } from './khan-xo-settings.component';

describe('KhanXoSettingsComponent', () => {
  let component: KhanXoSettingsComponent;
  let fixture: ComponentFixture<KhanXoSettingsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KhanXoSettingsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KhanXoSettingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
