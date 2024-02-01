import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable} from 'rxjs';
import { API } from '../config/api.config';
import { addDoctorDTO } from './dto/signup.dto';

@Injectable({
  providedIn: 'root',
})
export class addDoctorService {

  constructor(private http: HttpClient) {}

   addDoctor(doctor: addDoctorDTO): Observable<void> {
    return this.http.post<void>(API.addDoctor, doctor);
  }
}
