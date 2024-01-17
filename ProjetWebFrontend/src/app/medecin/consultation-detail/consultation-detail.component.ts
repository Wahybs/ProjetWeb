import { Component,Input, inject } from '@angular/core';
import { Router } from '@angular/router';
import { Subject, takeUntil } from 'rxjs';
import {  Consultation } from '../model/consultation';
import { ConsultationService } from '../consultation.service';


@Component({
  selector: 'app-consultation-detail',
  templateUrl: './consultation-detail.component.html'
  
})
export class ConsultationDetailComponent {
  @Input()
  consultation: Consultation = new Consultation() ;
 
 subject = new Subject();
 private consultationservice = inject(ConsultationService);

 constructor( private route:Router ){

 this.consultationservice.selectConsultation$
 .pipe(
   takeUntil(this.subject)
 )
 .subscribe(
   (consultation: Consultation) => this.consultation = consultation
 )


 }
 ngOnDestroy(): void {
  this.subject.next('je complete tout mes observateurs');
  this.subject.complete();
}

  getmoreinfo(){
    this.route.navigate(['patient/detail',this.consultation.patient.cin])
  }
}
