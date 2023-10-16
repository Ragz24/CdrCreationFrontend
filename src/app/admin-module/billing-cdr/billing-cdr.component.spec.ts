import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BillingCdrComponent } from './billing-cdr.component';

describe('BillingCdrComponent', () => {
  let component: BillingCdrComponent;
  let fixture: ComponentFixture<BillingCdrComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BillingCdrComponent]
    });
    fixture = TestBed.createComponent(BillingCdrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
