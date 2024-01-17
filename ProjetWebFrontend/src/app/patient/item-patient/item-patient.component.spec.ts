import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemPatientComponent } from './item-patient.component';

describe('ItemPatientComponent', () => {
  let component: ItemPatientComponent;
  let fixture: ComponentFixture<ItemPatientComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ItemPatientComponent]
    });
    fixture = TestBed.createComponent(ItemPatientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
