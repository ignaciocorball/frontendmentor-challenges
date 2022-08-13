import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InteractiveCardDetailsFormComponent } from './interactive-card-details-form.component';

describe('InteractiveCardDetailsFormComponent', () => {
  let component: InteractiveCardDetailsFormComponent;
  let fixture: ComponentFixture<InteractiveCardDetailsFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InteractiveCardDetailsFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InteractiveCardDetailsFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
