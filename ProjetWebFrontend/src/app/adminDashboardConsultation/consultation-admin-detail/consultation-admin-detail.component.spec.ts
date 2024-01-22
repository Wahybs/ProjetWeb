import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultationAdminDetailComponent } from './consultation-admin-detail.component';

describe('ConsultationAdminDetailComponent', () => {
  let component: ConsultationAdminDetailComponent;
  let fixture: ComponentFixture<ConsultationAdminDetailComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ConsultationAdminDetailComponent]
    });
    fixture = TestBed.createComponent(ConsultationAdminDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
