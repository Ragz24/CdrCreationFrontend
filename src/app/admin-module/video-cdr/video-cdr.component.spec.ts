import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VideoCdrComponent } from './video-cdr.component';

describe('VideoCdrComponent', () => {
  let component: VideoCdrComponent;
  let fixture: ComponentFixture<VideoCdrComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VideoCdrComponent]
    });
    fixture = TestBed.createComponent(VideoCdrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
