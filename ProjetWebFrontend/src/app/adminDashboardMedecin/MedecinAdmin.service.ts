import { Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import { Observable, Subject } from 'rxjs';
import { API } from '../config/api.config';
import { Medecin } from '../patient/model/medecin';

@Injectable({
  providedIn: 'root'
})
export class MedecinAdminService {
;
  private selectMedecinSubject = new Subject<Medecin>();
  selectMedecin$ = this.selectMedecinSubject.asObservable();
 
  private medecins : Medecin[] = []

  constructor(private http:HttpClient) {}
  
  getAllMedecins$():Observable<Medecin[]>{
    return this.http.get<Medecin[]>(API.getMedecin)
  }
  
  
  setterMedecin(item : Medecin[]){
    this.medecins = item
  } 

   selectMedecin(medecin: Medecin) {
    this.selectMedecinSubject.next(medecin);
  }
  

 /* deleteConsultation(id : string):Observable<void>{
    return this.http.delete<void>(`http://localhost:3000/consultation/admin/${id}`);
  }

  getConsultationById(id:string): Observable<UpdateConsultation>{
    return this.http.get<UpdateConsultation>(`http://localhost:3000/consultation/admin/${id}`);
  }

  modifyConsultation( id: string ,consultation : UpdateConsultation):Observable<void>{
    return this.http.patch<void>(`http://localhost:3000/consultation/admin/${id}`,consultation);
  }
  */
}
