import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewuserdetailsComponent } from './viewuserdetails.component';

describe('ViewuserdetailsComponent', () => {
  let component: ViewuserdetailsComponent;
  let fixture: ComponentFixture<ViewuserdetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ViewuserdetailsComponent]
    });
    fixture = TestBed.createComponent(ViewuserdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
