import { Component, Input, inject } from '@angular/core';
import { Router } from '@angular/router';
import { Subject, takeUntil } from 'rxjs';
import { ConsultationAdmin } from '../model/consultationAdmin';
import { ConsultationAdminService } from '../consultationAdmin.service';
import { Medecin } from 'src/app/patient/model/medecin';
import { MedecinAdmin } from '../model/medecinAdmin';
import { ConsultationService } from 'src/app/medecin/consultation.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-consultation-admin-detail',
  templateUrl: './consultation-admin-detail.component.html',
  styleUrls: ['./consultation-admin-detail.component.css']
})
export class ConsultationAdminDetailComponent {

  @Input()
  consultation: ConsultationAdmin = new ConsultationAdmin() ;
 
 subject = new Subject();
 private consultationservice = inject(ConsultationAdminService);

 constructor( private router:Router , private toastr : ToastrService){

 this.consultationservice.selectConsultation$
 .pipe(
   takeUntil(this.subject)
 )
 .subscribe(
   (consultation: ConsultationAdmin) => this.consultation = consultation
 )


 }
 ngOnDestroy(): void {
  this.subject.next('je complete tout mes observateurs');
  this.subject.complete();
}

getmoreinfoAboutMed() {
   const med :MedecinAdmin = this.consultation.medecin;
   this.router.navigate(['medecin/detail',med.id])
  }
  Modify() {
     // redirect to new route to modify the consultation 
     //ajout med 
     // suppression med 
     // modify patient 
  }
  Delete() {
     this.consultationservice.deleteConsultation(this.consultation.id).subscribe({
      next: ()=>{
        
       },
     error:(error)=>{
         this.toastr.warning("Connexion a l'API à échouer ");
     }
   });
   
  }

}
