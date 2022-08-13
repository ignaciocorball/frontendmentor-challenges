import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpensesChartComponentComponent } from './expenses-chart-component.component';

describe('ExpensesChartComponentComponent', () => {
  let component: ExpensesChartComponentComponent;
  let fixture: ComponentFixture<ExpensesChartComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExpensesChartComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExpensesChartComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
