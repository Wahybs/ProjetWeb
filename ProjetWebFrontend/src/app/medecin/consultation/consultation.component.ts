import { Component } from "@angular/core";
import { ConsultationService } from "../consultation.service";
import { ToastrService } from 'ngx-toastr'; 
import { distinctUntilChanged } from "rxjs";
import { Consultation } from "../model/consultation";


@Component({
  selector: "app-consultation",
  templateUrl: "./consultation.component.html",
  
})
export class ConsultationComponent {
  selectedConsultation: Consultation |null=null;
  consultations : Consultation[] =[];
  constructor(private consultationservice : ConsultationService , private toastr:ToastrService ) {
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