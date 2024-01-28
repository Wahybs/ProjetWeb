import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MedecinListAdminComponent } from './medecin-list.component';

describe('MedecinListComponent', () => {
  let component: MedecinListAdminComponent;
  let fixture: ComponentFixture<MedecinListAdminComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MedecinListAdminComponent]
    });
    fixture = TestBed.createComponent(MedecinListAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
