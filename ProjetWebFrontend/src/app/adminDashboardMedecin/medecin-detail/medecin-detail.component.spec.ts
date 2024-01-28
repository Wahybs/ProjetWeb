import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MedecinDetailAdminComponent } from './medecin-detail.component';

describe('MedecinDetailComponent', () => {
  let component: MedecinDetailAdminComponent;
  let fixture: ComponentFixture<MedecinDetailAdminComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MedecinDetailAdminComponent]
    });
    fixture = TestBed.createComponent(MedecinDetailAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
