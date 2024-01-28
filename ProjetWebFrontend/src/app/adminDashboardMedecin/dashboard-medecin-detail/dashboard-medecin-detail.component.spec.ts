import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardMedecinDetailAdminComponent } from './dashboard-medecin-detail.component';

describe('DashboardMedecinDetailComponent', () => {
  let component: DashboardMedecinDetailAdminComponent;
  let fixture: ComponentFixture<DashboardMedecinDetailAdminComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DashboardMedecinDetailAdminComponent]
    });
    fixture = TestBed.createComponent(DashboardMedecinDetailAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
