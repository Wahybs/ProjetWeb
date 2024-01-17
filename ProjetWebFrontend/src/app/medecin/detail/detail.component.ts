import { Component, Input} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';


import { Consultation } from '../model/consultation';
import { ConsultationService } from '../consultation.service';
import { ToastrService } from 'ngx-toastr';
import { distinctUntilChanged } from 'rxjs';


@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html'
  
})

export class DetailComponent {
  @Input()
  consultations: Consultation []  = [];
  selectedConsultation: Consultation |null=null;
   constructor( private activerouter : ActivatedRoute, 
    private consultationservice : ConsultationService,
    private  router : Router,
    private toastr: ToastrService
    ) {
    const consultationId = activerouter.snapshot.params['cin'];
    
    this.consultationservice.getConsultationByPatientAndMed(consultationId).subscribe({
      next: (item)=>{
        console.log(item);
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
