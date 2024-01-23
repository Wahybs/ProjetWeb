import { Component, Input } from '@angular/core';
import { ConsultationAdmin } from '../model/consultationAdmin';

@Component({
  selector: 'app-list-admin',
  templateUrl: './list-admin.component.html'
})
export class ListAdminComponent {
  @Input() 
  consultations: ConsultationAdmin[] = [];
  initialId: number=1;
}
