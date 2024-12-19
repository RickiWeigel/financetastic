import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CashFlowCardComponent } from './cash-flow-card.component';

describe('CashFlowCardComponent', () => {
  let component: CashFlowCardComponent;
  let fixture: ComponentFixture<CashFlowCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CashFlowCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CashFlowCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
