import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultationModifyAdminComponent } from './consultation-modify-admin.component';

describe('ConsultationModifyAdminComponent', () => {
  let component: ConsultationModifyAdminComponent;
  let fixture: ComponentFixture<ConsultationModifyAdminComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ConsultationModifyAdminComponent]
    });
    fixture = TestBed.createComponent(ConsultationModifyAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
