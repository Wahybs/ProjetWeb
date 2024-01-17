import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpParams,
  HttpHeaders
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from '../auth.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(private authService: AuthService) {
  }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    // Si on est authentifié
    if (this.authService.isAuthenticated() ){
        const token = localStorage.getItem('token');
        if (token) {
          const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
          const newReq = request.clone(
            {headers}
          );
          return next.handle(newReq);
        }
      }
    //sinon
      // la relancer
    return next.handle(request);
  }
}