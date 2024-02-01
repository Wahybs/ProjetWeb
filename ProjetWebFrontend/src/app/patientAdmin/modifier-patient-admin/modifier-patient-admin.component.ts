import { Component } from '@angular/core';
import { UpdatePatient } from '../model/updatePatient';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { PatientAdminService } from '../PatientAdmin.service';

@Component({
  selector: 'app-modifier-patient-admin',
  templateUrl: './modifier-patient-admin.component.html',
  styleUrls: ['./modifier-patient-admin.component.css']
})
export class ModifierPatientAdminComponent {
  patient = new UpdatePatient();
  patientId : string ="";
  constructor(
    private activerouter : ActivatedRoute,
     private router : Router ,
     private toastr : ToastrService,
     private patientService : PatientAdminService
     ){
      this.patientId = activerouter.snapshot.params['id'];
      this.patientService.getpatientById(this.patientId).subscribe({
        next: (patient: UpdatePatient) => {
          this.patient = patient;
        },
        error: (err) => {
          this.toastr.error('Error fetching patient', err);
        }
      });
     }
  submitForm(patient:UpdatePatient): void {
    this.patientService.modifyPatient(this.patientId,patient)
    .subscribe({
      next: (response) => {
        this.router.navigate(['patients']);
        this.toastr.success('patient added successfully', 'Success');
      },
      error: (error) => {
        this.toastr.error('Error adding patient', 'Error');
      }
    });
}

}
