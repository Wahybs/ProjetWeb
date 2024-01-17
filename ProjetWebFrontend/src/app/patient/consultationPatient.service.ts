import { Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import { Observable, Subject } from 'rxjs';
import { ConsultationPatient } from './model/consultationPatient';
import { API } from '../config/api.config';

@Injectable({
  providedIn: 'root'
})
export class ConsultationPatientService {
;
  private selectConsultationSubject = new Subject<ConsultationPatient>();
  selectConsultation$ = this.selectConsultationSubject.asObservable();
 
  private consultations : ConsultationPatient[] = []


  constructor(private http:HttpClient) {}
  
  getConsultations$(): Observable<ConsultationPatient[]> {
    return this.http.get<ConsultationPatient[]>(API.dashboardPatient)
  }

  setterConsultations(item : ConsultationPatient[]){
    this.consultations = item
  } 

   selectConsultation(consultation: ConsultationPatient) {
    this.selectConsultationSubject.next(consultation);
  }
  
  
}
