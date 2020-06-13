import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BotFieldComponent } from './bot-field.component';

describe('BotFieldComponent', () => {
  let component: BotFieldComponent;
  let fixture: ComponentFixture<BotFieldComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BotFieldComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BotFieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
