import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventCdrComponent } from './event-cdr.component';

describe('EventCdrComponent', () => {
  let component: EventCdrComponent;
  let fixture: ComponentFixture<EventCdrComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EventCdrComponent]
    });
    fixture = TestBed.createComponent(EventCdrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
