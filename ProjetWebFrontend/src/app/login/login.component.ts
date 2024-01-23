import {Component, OnInit} from '@angular/core';
import {NgForm} from "@angular/forms";
import {Router} from "@angular/router";
import { CredentialsDto } from './DTO/credentials.dto';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from './auth.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
 
})
export class LoginComponent implements OnInit{
  email: string = '';  // Ensure these properties are defined
  password: string = '';  // Ensure these properties are defined
  constructor(
    private authService:AuthService,
    private toastr: ToastrService,
    private router: Router
  ) {}
  ngOnInit() {
  }
 
  // Function to handle the login button click
  login(credentials:CredentialsDto) {
    // Check if the form is valid
  
      // Get the email and password from the form
     /* const email = loginForm.value.email;
      const password = loginForm.value.password;

      // Define the login data
      const loginData = {
        email: email,
        password: password
      };

      console.log(loginData);*/
      console.log('Login function called');
      
      // Make a POST request to the authentication endpoint
      this.authService.login(credentials)
      .subscribe({
        next: (response) => {
          // Handle successful login
          // Store the JWT token in local storage
          localStorage.setItem('token', response.jwt);
          const role = this.authService.DecodeRole(response.jwt).role;
          if (role==='medecin')
          // Redirect to the dashboard
          this.router.navigate(['medecin/dashboard']);
          else if(role==='admin') 
          this.router.navigate(['admin/dashboard']);
          else 
          this.router.navigate(['patient/dashboard']);
        },
        error: (error) => {
          // Handle login error
          console.error('Login failed:', error);
      
          // Display error message using Toastr
          this.toastr.error('Invalid email or password', 'Login Failed');
        }
      });
    
  }
}