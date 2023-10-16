import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VoiceCDRComponent } from './voice-cdr.component';

describe('VoiceCDRComponent', () => {
  let component: VoiceCDRComponent;
  let fixture: ComponentFixture<VoiceCDRComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VoiceCDRComponent]
    });
    fixture = TestBed.createComponent(VoiceCDRComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
