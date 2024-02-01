import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemPatientAdminComponent } from './item-patient-admin.component';

describe('ItemPatientAdminComponent', () => {
  let component: ItemPatientAdminComponent;
  let fixture: ComponentFixture<ItemPatientAdminComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ItemPatientAdminComponent]
    });
    fixture = TestBed.createComponent(ItemPatientAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
