import { Component, Input } from '@angular/core';
import { ConsultationPatient } from '../model/consultationPatient';

@Component({
  selector: 'app-list-patient',
  templateUrl: './list-patient.component.html',
  styleUrls: ['./list-patient.component.css']
})
export class ListPatientComponent {
  @Input() consultations: ConsultationPatient[] = [];
  initialId: number=1;
}
