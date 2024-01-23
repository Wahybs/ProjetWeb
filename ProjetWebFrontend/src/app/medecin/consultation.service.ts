import { Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import { Observable, Subject } from 'rxjs';
import { Consultation } from './model/consultation';
import { API } from '../config/api.config';
import { ConsultationAdmin } from '../adminDashboardConsultation/model/consultationAdmin';
import { query } from '@angular/animations';

@Injectable({
  providedIn: 'root'
})
export class ConsultationService {
;
  private selectConsultationSubject = new Subject<Consultation>();
  selectConsultation$ = this.selectConsultationSubject.asObservable();
 
  private consultations : Consultation[] = []


  constructor(private http:HttpClient) {}
  
  getConsultations$(id?:string): Observable<Consultation[]> {
    return this.http.get<Consultation[]>(`${API.dashboardMedecin}?id=${id}`);
  }
  
  setterConsultations(item : Consultation[]){
    this.consultations = item
  } 

   selectConsultation(consultation: Consultation) {
    this.selectConsultationSubject.next(consultation);
  }
  getConsultationByPatientAndMed(cin:string):Observable<Consultation[]>{
    return this.http.get<Consultation[]>(`http://localhost:3000/consultation/patient/${cin}`)
  }
  
}
