import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalculationAreaComponent } from './calculation-area.component';

describe('CalculationAreaComponent', () => {
  let component: CalculationAreaComponent;
  let fixture: ComponentFixture<CalculationAreaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CalculationAreaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CalculationAreaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
