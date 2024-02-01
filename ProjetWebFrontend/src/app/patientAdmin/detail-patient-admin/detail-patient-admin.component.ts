import { Component, Input, inject } from '@angular/core';
import { Router } from '@angular/router';
import { Subject, takeUntil } from 'rxjs';
import { PatientAdminList } from '../model/patientAdmin';
import { PatientAdminService } from '../PatientAdmin.service';

@Component({
  selector: 'app-detail-patient-admin',
  templateUrl: './detail-patient-admin.component.html',
  styleUrls: ['./detail-patient-admin.component.css']
})
export class DetailPatientAdminComponent {

  @Input()
  patient: PatientAdminList = new PatientAdminList();

  subject = new Subject();
  private patientservice = inject(PatientAdminService);

  constructor(private router: Router) {

    this.patientservice.selectPatient$
      .pipe(
        takeUntil(this.subject)
      )
      .subscribe(
        (patient: PatientAdminList) => this.patient = patient
      )
  }

  Modify() {
    const id = this.patient.id;
    this.router.navigate(['patient/modifier',id])
    }
}
