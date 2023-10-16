import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewcallComponent } from './viewcall.component';

describe('ViewcallComponent', () => {
  let component: ViewcallComponent;
  let fixture: ComponentFixture<ViewcallComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ViewcallComponent]
    });
    fixture = TestBed.createComponent(ViewcallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
