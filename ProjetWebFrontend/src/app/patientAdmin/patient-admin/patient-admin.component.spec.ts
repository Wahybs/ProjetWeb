import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientAdminComponent } from './patient-admin.component';

describe('PatientAdminComponent', () => {
  let component: PatientAdminComponent;
  let fixture: ComponentFixture<PatientAdminComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PatientAdminComponent]
    });
    fixture = TestBed.createComponent(PatientAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
