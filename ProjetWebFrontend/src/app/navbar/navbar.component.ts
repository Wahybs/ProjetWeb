import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../login/auth.service';
import { API } from '../config/api.config';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html'
})
export class NavbarComponent {


  constructor(
    public authService: AuthService,
    private router: Router,
  ){}
  logout() {
    this.authService.logout();
    this.router.navigate(['/login']);
  }
  goToDashboard() {
    const jwt = localStorage.getItem('token');
    
    if (jwt) {
      try {
        const role = this.authService.DecodeRole(jwt).role;
  
        switch (role) {
          case 'medecin':
            this.router.navigate(['medecin/dashboard']);
            break;
          case 'patient':
            this.router.navigate(['patient/dashboard']);
            break;
          default:
            console.error('Invalid or unsupported role:', role);
            // Handle the case when the role is not 'medecin' or 'patient'
            break;
        }
      } catch (error) {
        console.error('Error decoding JWT:', error);
        // Handle decoding error
      }
    } else {
      console.error('JWT token not found in local storage');
      // Handle the case when JWT is not available in local storage
    }
  }
  isMedecin(): boolean {
    const jwt = localStorage.getItem('token');
    
    if (jwt) {
      try {
        const role = this.authService.DecodeRole(jwt).role;
        return role === "medecin";
      } catch (error) {
        console.error('Error decoding JWT:', error);
        // Handle decoding error, return false, or handle as needed
        return false;
      }
    }
  
    // If JWT is not available, return false
    return false;
  }
}
