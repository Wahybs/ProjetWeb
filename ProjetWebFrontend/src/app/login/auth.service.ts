import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CredentialsDto } from './DTO/credentials.dto';
import { Observable, tap } from 'rxjs';
import { LoginResponseDto } from './DTO/login-response.dto';
import { API } from '../config/api.config';
import { Router } from '@angular/router';
import { jwtDecode } from 'jwt-decode';
import { JWtDecodedDTO } from './DTO/jwt-decoded.dto';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient, private router:Router) { }

login(credentials : CredentialsDto): Observable<LoginResponseDto>{
  return this.http.post<LoginResponseDto>(API.login, credentials).pipe(
    tap( loginResponse => {
      localStorage.setItem('token', loginResponse.jwt);
      
    })
  );
}
isAuthenticated(): boolean {
  return !!localStorage.getItem('token');
}
 DecodeRole(jwt: string):JWtDecodedDTO{
  return  jwtDecode(jwt);
 }

logout(){
  localStorage.removeItem('token');

  this.router.navigate(['/login']);
}
}







