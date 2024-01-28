import { Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import { Observable, Subject } from 'rxjs';
import { API } from '../config/api.config';
import { ConsultationAdmin } from './model/consultationAdmin';
import { UpdateConsultation } from './model/updateConsultation';

@Injectable({
  providedIn: 'root'
})
export class ConsultationAdminService {
;
  private selectConsultationSubject = new Subject<ConsultationAdmin>();
  selectConsultation$ = this.selectConsultationSubject.asObservable();
 
  private consultations : ConsultationAdmin[] = []

  constructor(private http:HttpClient) {}
  
  getAllConsultations$():Observable<ConsultationAdmin[]>{
    return this.http.get<ConsultationAdmin[]>(API.dashboardConsultationAdmin)
  }
  
  
  setterConsultations(item : ConsultationAdmin[]){
    this.consultations = item
  } 

   selectConsultation(consultation: ConsultationAdmin) {
    this.selectConsultationSubject.next(consultation);
  }
  

  deleteConsultation(id : string):Observable<void>{
    return this.http.delete<void>(`http://localhost:3000/consultation/admin/${id}`);
  }

  getConsultationById(id:string): Observable<UpdateConsultation>{
    return this.http.get<UpdateConsultation>(`http://localhost:3000/consultation/admin/${id}`);
  }

  modifyConsultation( id: string ,consultation : UpdateConsultation):Observable<void>{
    return this.http.patch<void>(`http://localhost:3000/consultation/admin/${id}`,consultation);
  }
  
}
