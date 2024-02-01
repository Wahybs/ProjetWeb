import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListPatientAdminComponent } from './list-patient-admin.component';

describe('ListPatientAdminComponent', () => {
  let component: ListPatientAdminComponent;
  let fixture: ComponentFixture<ListPatientAdminComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListPatientAdminComponent]
    });
    fixture = TestBed.createComponent(ListPatientAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
