import { Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import { Observable, Subject } from 'rxjs';
import { API } from '../config/api.config';
import { PatientAdminList } from './model/patientAdmin';
import { UpdatePatient } from './model/updatePatient';

@Injectable({
  providedIn: 'root'
})
export class PatientAdminService {

  private selectPatientSubject = new Subject<PatientAdminList>();
  selectPatient$ = this.selectPatientSubject.asObservable();
 
  private patients : PatientAdminList[] = []

  constructor(private http:HttpClient) {}
  
  getAllPatients$():Observable<PatientAdminList[]>{
    return this.http.get<PatientAdminList[]>(API.getPatient)
  }
  
  
  setterPatient(item : PatientAdminList[]){
    this.patients = item
  } 

   selectPatient(patient: PatientAdminList) {
    this.selectPatientSubject.next(patient);
  }
  


  getpatientById(id:string): Observable<UpdatePatient>{
    return this.http.get<UpdatePatient>(`http://localhost:3000/patient/admin/${id}`);
  }

  modifyPatient( id: string ,patient : UpdatePatient):Observable<void>{
    return this.http.patch<void>(`http://localhost:3000/patient/admin/${id}`,patient);
  }
  
}
