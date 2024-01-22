import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { distinctUntilChanged } from 'rxjs';
import { ConsultationService } from 'src/app/medecin/consultation.service';
import { Consultation } from 'src/app/medecin/model/consultation';

@Component({
  selector: 'app-consultation-admin',
  templateUrl: '../../medecin/consultation/consultation.component.html'
})
export class ConsultationAdminComponent {
  selectedConsultation: Consultation |null=null;
  consultations : Consultation[] =[];
  constructor(private consultationservice : ConsultationService , private toastr:ToastrService ) {
    this.consultationservice.getAllConsultations$().subscribe({
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
