import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { ConsultationComponent } from './medecin/consultation/consultation.component';
import { DetailComponent } from './medecin/detail/detail.component';
import { ConsultationPatientComponent } from './patient/consultation-patient/consultation-patient.component';
import { AddConsultationComponent } from './addConsultation/consultation.component';

const routes: Routes = [
  {path:"medecin/dashboard",component:ConsultationComponent},
  {path:"patient/dashboard",component:ConsultationPatientComponent},
  {path:"patient/detail/:cin",component:DetailComponent},
  {path: 'login', component: LoginComponent},
  {path: 'signup', component: SignupComponent},
  {path:'Consultation', component:AddConsultationComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
