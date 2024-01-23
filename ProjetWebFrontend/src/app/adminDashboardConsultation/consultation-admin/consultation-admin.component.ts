import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { distinctUntilChanged } from 'rxjs';
import { ConsultationAdmin } from '../model/consultationAdmin';
import { ConsultationAdminService } from '../consultationAdmin.service';

@Component({
  selector: 'app-consultation-admin',
  templateUrl: './consultation-admin.component.html'
})
export class ConsultationAdminComponent {
  selectedConsultation: ConsultationAdmin |null=null;
  consultations : ConsultationAdmin[] =[];
  constructor(private consultationservice : ConsultationAdminService , private toastr:ToastrService ) {
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
