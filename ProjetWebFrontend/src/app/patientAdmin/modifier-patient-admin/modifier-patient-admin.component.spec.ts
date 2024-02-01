import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifierPatientAdminComponent } from './modifier-patient-admin.component';

describe('ModifierPatientAdminComponent', () => {
  let component: ModifierPatientAdminComponent;
  let fixture: ComponentFixture<ModifierPatientAdminComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ModifierPatientAdminComponent]
    });
    fixture = TestBed.createComponent(ModifierPatientAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
