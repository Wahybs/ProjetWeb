import { Component, Input } from '@angular/core';
import { ConsultationPatient } from '../model/consultationPatient';
import { ConsultationPatientService } from '../consultationPatient.service';

@Component({
  selector: 'app-item-patient',
  templateUrl: './item-patient.component.html',
  styleUrls: ['./item-patient.component.css']
})
export class ItemPatientComponent {
  @Input()
  consultation: ConsultationPatient | null = null; 
  @Input()
  consultationId:number=1;
constructor(private consultationservice : ConsultationPatientService){}
  onSelectConsultation() {
    if (this.consultation)
    this.consultationservice.selectConsultation(this.consultation)
  }

}
