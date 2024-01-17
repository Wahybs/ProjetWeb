import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultationPatientDetailComponent } from './consultation-patient-detail.component';

describe('ConsultationPatientDetailComponent', () => {
  let component: ConsultationPatientDetailComponent;
  let fixture: ComponentFixture<ConsultationPatientDetailComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ConsultationPatientDetailComponent]
    });
    fixture = TestBed.createComponent(ConsultationPatientDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
