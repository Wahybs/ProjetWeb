import { Component, Input } from '@angular/core';
import { PatientAdmin } from 'src/app/adminDashboardConsultation/model/patientAdmin';
import { PatientAdminService } from '../PatientAdmin.service';
import { PatientAdminList } from '../model/patientAdmin';

@Component({
  selector: 'app-item-patient-admin',
  templateUrl: './item-patient-admin.component.html',
  styleUrls: ['./item-patient-admin.component.css']
})
export class ItemPatientAdminComponent {
  @Input()
  patient: PatientAdminList | null = null; 
  @Input()
  patientId:number=1;
constructor(private patientservice : PatientAdminService){}
  onSelectpatient() {
    if (this.patient)
    this.patientservice.selectPatient(this.patient)
  }
}
