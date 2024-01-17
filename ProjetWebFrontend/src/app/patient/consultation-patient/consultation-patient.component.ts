import { Component } from '@angular/core';
import { ConsultationPatient } from '../model/consultationPatient';
import { ToastrService } from 'ngx-toastr';
import { distinctUntilChanged } from 'rxjs';
import { ConsultationPatientService } from '../consultationPatient.service';

@Component({
  selector: 'app-consultation-patient',
  templateUrl: './consultation-patient.component.html',
  styleUrls: ['./consultation-patient.component.css']
})
export class ConsultationPatientComponent {
  selectedConsultation: ConsultationPatient |null=null;
  consultations : ConsultationPatient[] =[];
  constructor(private consultationservice : ConsultationPatientService , private toastr:ToastrService ) {
    this.consultationservice.getConsultations$().subscribe({
     next: (item)=>{
        this.consultations = item;
        this.consultationservice.setterConsultations(item)
      },
    error:(error)=>{
        this.toastr.warning("Connexion a l'API à échouer ");
    }
  });
 
  this.consultationservice.selectConsultation$
  .pipe(
    distinctUntilChanged()
  )
 
  }
}
