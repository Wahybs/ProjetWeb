import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MedecinItemAdminComponent } from './medecin-item.component';

describe('MedecinItemComponent', () => {
  let component: MedecinItemAdminComponent;
  let fixture: ComponentFixture<MedecinItemAdminComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MedecinItemAdminComponent]
    });
    fixture = TestBed.createComponent(MedecinItemAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
