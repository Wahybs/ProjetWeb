import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailPatientAdminComponent } from './detail-patient-admin.component';

describe('DetailPatientAdminComponent', () => {
  let component: DetailPatientAdminComponent;
  let fixture: ComponentFixture<DetailPatientAdminComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DetailPatientAdminComponent]
    });
    fixture = TestBed.createComponent(DetailPatientAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
