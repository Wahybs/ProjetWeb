import { Component, Input } from '@angular/core';
import { ConsultationAdminService } from '../consultationAdmin.service';
import { ConsultationAdmin } from '../model/consultationAdmin';

@Component({
  selector: 'app-item-admin',
  templateUrl: './item-admin.component.html'
})
export class ItemAdminComponent {
  @Input()
  consultation: ConsultationAdmin | null = null; 
  @Input()
  consultationId:number=1;
constructor(private consultationservice : ConsultationAdminService){}
  onSelectConsultation() {
    if (this.consultation)
    this.consultationservice.selectConsultation(this.consultation)
  }
}
