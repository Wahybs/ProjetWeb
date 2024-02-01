import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../login/auth.service';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html'
})
export class NavbarComponent {


  constructor(
    public authService: AuthService,
    private router: Router,
  ) { }
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
          case 'admin':
            this.router.navigate(['admin/dashboard']);
            break;
          default:
            console.error('Invalid or unsupported role:', role);

            break;
        }
      } catch (error) {
        console.error('Error decoding JWT:', error);

      }
    } else {
      console.error('JWT token not found in local storage');

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

        return false;
      }
    }
    return false;
  }
  isAdmin(): boolean {
    const jwt = localStorage.getItem('token');

    if (jwt) {
      try {
        const role = this.authService.DecodeRole(jwt).role;
        return role === "admin";
      } catch (error) {
        console.error('Error decoding JWT:', error);
        return false;
      }
    }
    return false;
  }
}
