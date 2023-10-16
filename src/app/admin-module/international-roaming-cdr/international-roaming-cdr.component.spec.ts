import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InternationalRoamingCdrComponent } from './international-roaming-cdr.component';

describe('InternationalRoamingCdrComponent', () => {
  let component: InternationalRoamingCdrComponent;
  let fixture: ComponentFixture<InternationalRoamingCdrComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InternationalRoamingCdrComponent]
    });
    fixture = TestBed.createComponent(InternationalRoamingCdrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
