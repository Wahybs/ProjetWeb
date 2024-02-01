import { Component, Input } from '@angular/core';
import { PatientAdminList } from '../model/patientAdmin';

@Component({
  selector: 'app-list-patient-admin',
  templateUrl: './list-patient-admin.component.html',
  styleUrls: ['./list-patient-admin.component.css']
})
export class ListPatientAdminComponent {
  @Input() patients: PatientAdminList[] = [];
  initialId: number=1;
}
