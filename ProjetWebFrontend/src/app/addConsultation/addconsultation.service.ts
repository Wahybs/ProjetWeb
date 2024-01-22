import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, tap } from 'rxjs';
import { LoginResponseDto } from '../login/DTO/login-response.dto';
import { API } from '../config/api.config';
import { ConsultationDto } from './dto/consultation.dto';

@Injectable({
  providedIn: 'root',
})
export class AddConsultationService {

  constructor(private http: HttpClient) {}

   addConsultation(consultation: ConsultationDto): Observable<void>{
   return  this.http.post<void>(API.addConsultation, consultation)
  }
}
