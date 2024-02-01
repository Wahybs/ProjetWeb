import { Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import { Observable, Subject } from 'rxjs';
import { API } from '../config/api.config';
import { MedecinAdmin } from './model/medecinAdmin';

@Injectable({
  providedIn: 'root'
})
export class MedecinAdminService {
;
  private selectMedecinSubject = new Subject<MedecinAdmin>();
  selectMedecin$ = this.selectMedecinSubject.asObservable();
 
  private medecins : MedecinAdmin[] = []

  constructor(private http:HttpClient) {}
  
  getAllMedecins$():Observable<MedecinAdmin[]>{
    return this.http.get<MedecinAdmin[]>(API.getMedecin)
  }
  
  
  setterMedecin(item : MedecinAdmin[]){
    this.medecins = item
  } 

   selectMedecin(medecin: MedecinAdmin) {
    this.selectMedecinSubject.next(medecin);
  }
  

  deleteMedecin(id : string):Observable<void>{
    return this.http.delete<void>(`http://localhost:3000/medecin/admin/${id}`);
  }

 /* getConsultationById(id:string): Observable<UpdateConsultation>{
    return this.http.get<UpdateConsultation>(`http://localhost:3000/consultation/admin/${id}`);
  }

  modifyConsultation( id: string ,consultation : UpdateConsultation):Observable<void>{
    return this.http.patch<void>(`http://localhost:3000/consultation/admin/${id}`,consultation);
  }
  */
}
