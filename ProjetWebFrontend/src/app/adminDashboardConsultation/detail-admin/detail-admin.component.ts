import { Component, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { distinctUntilChanged } from 'rxjs';
import { ConsultationService } from 'src/app/medecin/consultation.service';
import { Consultation } from 'src/app/medecin/model/consultation';

@Component({
  selector: 'app-detail-admin',
  templateUrl: './detail-admin.component.html',
  styleUrls: ['./detail-admin.component.css']
})
export class DetailAdminComponent {
  @Input()
  consultations: Consultation []  = [];
  selectedConsultation: Consultation |null=null;
   constructor( private activerouter : ActivatedRoute, 
    private consultationservice : ConsultationService,
    private  router : Router,
    private toastr: ToastrService
    ) {
    const consultationId = activerouter.snapshot.params['id'];
    
    this.consultationservice.getConsultations$(consultationId).subscribe({
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
