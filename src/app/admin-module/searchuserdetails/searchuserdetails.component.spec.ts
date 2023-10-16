import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchuserdetailsComponent } from './searchuserdetails.component';

describe('SearchuserdetailsComponent', () => {
  let component: SearchuserdetailsComponent;
  let fixture: ComponentFixture<SearchuserdetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SearchuserdetailsComponent]
    });
    fixture = TestBed.createComponent(SearchuserdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
