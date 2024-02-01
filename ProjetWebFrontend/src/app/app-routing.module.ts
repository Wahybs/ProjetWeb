import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { ConsultationComponent } from './medecin/consultation/consultation.component';
import { DetailComponent } from './medecin/detail/detail.component';
import { ConsultationPatientComponent } from './patient/consultation-patient/consultation-patient.component';
import { AddConsultationComponent } from './addConsultation/consultation.component';
import { ConsultationAdminComponent } from './adminDashboardConsultation/consultation-admin/consultation-admin.component';
import { DetailAdminComponent } from './adminDashboardConsultation/detail-admin/detail-admin.component';
import { ConsultationModifyAdminComponent } from './adminDashboardConsultation/consultation-modify-admin/consultation-modify-admin.component';
import { DashboardMedecinAdminComponent } from './adminDashboardMedecin/dashboard-medecin/dashboard-medecin.component';
import { AddMedecinComponent } from './add-medecin/add-medecin.component';
import { PatientAdminComponent } from './patientAdmin/patient-admin/patient-admin.component';
import { ModifierPatientAdminComponent } from './patientAdmin/modifier-patient-admin/modifier-patient-admin.component';

const routes: Routes = [
  {path:"medecin/dashboard",component:ConsultationComponent},
  {path:"patient/dashboard",component:ConsultationPatientComponent},
  {path:"medecins",component:DashboardMedecinAdminComponent},
  {path:"patients",component:PatientAdminComponent},
  {path:"addMedecin",component:AddMedecinComponent},
  {path:"admin/dashboard",component:ConsultationAdminComponent},
  {path:"patient/detail/:cin",component:DetailComponent},
  {path:"medecin/detail/:id",component:DetailAdminComponent},
  {path: 'login', component: LoginComponent},
  {path: 'signup', component: SignupComponent},
  {path:'Consultation', component:AddConsultationComponent},
  {path:"consultation/modifier/:id",component:ConsultationModifyAdminComponent},
  {path:"patient/modifier/:id",component:ModifierPatientAdminComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
