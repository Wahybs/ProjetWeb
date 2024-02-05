import { Component } from '@angular/core';
import { SignUpDTO } from './dto/signup.dto';
import { SignUpService } from './signup.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {

constructor(
  private signupService: SignUpService,
  private router : Router,
  private toastr : ToastrService
){}

  signup(credentials:SignUpDTO) {
    console.log('signup function called');
      console.log(credentials);
      this.signupService.signUp(credentials)
      .subscribe({
        next: (response) => {
          localStorage.setItem('token', response.jwt);
          this.router.navigate(['patient/dashboard']);
        },
        error: () => {
          this.toastr.error('User already exists!!', 'SignUp Failed')
        }
      });
  }

}
