import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, tap } from 'rxjs';
import { SignUpDTO } from './dto/signup.dto';
import { LoginResponseDto } from '../login/DTO/login-response.dto';
import { API } from '../config/api.config';

@Injectable({
  providedIn: 'root',
})
export class SignUpService {

  constructor(private http: HttpClient) {}

   signUp(user: SignUpDTO): Observable<LoginResponseDto> {
    return this.http.post<LoginResponseDto>(API.signup, user).pipe(
        tap( loginResponse => {
          localStorage.setItem('token', loginResponse.jwt);
          
        })
      );
  }
}
