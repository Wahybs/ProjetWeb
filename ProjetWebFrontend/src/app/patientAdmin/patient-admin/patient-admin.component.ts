import { Component } from '@angular/core';
import { PatientAdminList } from '../model/patientAdmin';
import { ToastrService } from 'ngx-toastr';
import { PatientAdminService } from '../PatientAdmin.service';
import { distinctUntilChanged } from 'rxjs';

@Component({
  selector: 'app-patient-admin',
  templateUrl: './patient-admin.component.html',
  styleUrls: ['./patient-admin.component.css']
})
export class PatientAdminComponent {
  selectedpatient: PatientAdminList |null=null;
  patients : PatientAdminList[] =[];
  constructor(private patientservice : PatientAdminService , private toastr:ToastrService ) {
    this.patientservice.getAllPatients$().subscribe({
     next: (item)=>{
        this.patients = item;
        this.patientservice.setterPatient(item)
      },
    error:(error)=>{
        this.toastr.warning("Connexion a l'API à échouer ");
    }
  });
 
  this.patientservice.selectPatient$
  .pipe(
    distinctUntilChanged()
  )
 
  }
}
