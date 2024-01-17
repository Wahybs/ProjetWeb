import { Component, Input, inject } from '@angular/core';
import { ConsultationPatient } from '../model/consultationPatient';
import { Subject, takeUntil } from 'rxjs';
import { Router } from '@angular/router';
import { ConsultationPatientService } from '../consultationPatient.service';

@Component({
  selector: 'app-consultation-patient-detail',
  templateUrl: './consultation-patient-detail.component.html',
  styleUrls: ['./consultation-patient-detail.component.css']
})
export class ConsultationPatientDetailComponent {
  @Input()
  consultation: ConsultationPatient = new ConsultationPatient() ;
 
 subject = new Subject();
 private consultationservice = inject(ConsultationPatientService);

 constructor( private route:Router ){

 this.consultationservice.selectConsultation$
 .pipe(
   takeUntil(this.subject)
 )
 .subscribe(
   (consultation: ConsultationPatient) => this.consultation = consultation
 )


 }
 ngOnDestroy(): void {
  this.subject.next('je complete tout mes observateurs');
  this.subject.complete();
}

}
