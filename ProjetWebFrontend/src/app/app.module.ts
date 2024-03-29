import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DefaultImagePipe } from './medecin/pipes/default-image.pipe';
import {HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { ToastrModule } from 'ngx-toastr';
import { NavbarComponent } from './navbar/navbar.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { ConsultationComponent } from './medecin/consultation/consultation.component';
import { DetailComponent } from './medecin/detail/detail.component';
import { ItemComponent } from './medecin/item/item.component';
import { ListComponent } from './medecin/list/list.component';
import { ConsultationDetailComponent } from './medecin/consultation-detail/consultation-detail.component';
import { AuthInterceptor } from './login/interceptors/auth.interceptor';
import { ConsultationPatientComponent } from './patient/consultation-patient/consultation-patient.component';
import { ConsultationPatientDetailComponent } from './patient/consultation-patient-detail/consultation-patient-detail.component';
import { DetailPatientComponent } from './patient/detail-patient/detail-patient.component';
import { ItemPatientComponent } from './patient/item-patient/item-patient.component';
import { ListPatientComponent } from './patient/list-patient/list-patient.component';
import { AddConsultationComponent } from './addConsultation/consultation.component';
import { ConsultationAdminComponent } from './adminDashboardConsultation/consultation-admin/consultation-admin.component';
import { ConsultationAdminDetailComponent } from './adminDashboardConsultation/consultation-admin-detail/consultation-admin-detail.component';
import { ItemAdminComponent } from './adminDashboardConsultation/item-admin/item-admin.component';
import { ListAdminComponent } from './adminDashboardConsultation/list-admin/list-admin.component';
import { DetailAdminComponent } from './adminDashboardConsultation/detail-admin/detail-admin.component';
import { ConsultationModifyAdminComponent } from './adminDashboardConsultation/consultation-modify-admin/consultation-modify-admin.component';
import { DashboardMedecinAdminComponent } from './adminDashboardMedecin/dashboard-medecin/dashboard-medecin.component';
import { DashboardMedecinDetailAdminComponent } from './adminDashboardMedecin/dashboard-medecin-detail/dashboard-medecin-detail.component';
import { MedecinDetailAdminComponent } from './adminDashboardMedecin/medecin-detail/medecin-detail.component';
import { MedecinItemAdminComponent } from './adminDashboardMedecin/medecin-item/medecin-item.component';
import { MedecinListAdminComponent } from './adminDashboardMedecin/medecin-list/medecin-list.component';
import { AddMedecinComponent } from './add-medecin/add-medecin.component';
import { PatientAdminComponent } from './patientAdmin/patient-admin/patient-admin.component';
import { DetailPatientAdminComponent } from './patientAdmin/detail-patient-admin/detail-patient-admin.component';
import { ItemPatientAdminComponent } from './patientAdmin/item-patient-admin/item-patient-admin.component';
import { ListPatientAdminComponent } from './patientAdmin/list-patient-admin/list-patient-admin.component';
import { ModifierPatientAdminComponent } from './patientAdmin/modifier-patient-admin/modifier-patient-admin.component';




@NgModule({
  declarations: [
    AppComponent,
    DefaultImagePipe,
    NavbarComponent,
    LoginComponent,
    SignupComponent,
    DetailComponent,
    ItemComponent,
    ListComponent,
    ConsultationComponent,
  ConsultationDetailComponent,
  ConsultationPatientComponent,
  ConsultationPatientDetailComponent,
  DetailPatientComponent,
  ItemPatientComponent,
  ListPatientComponent,
  AddConsultationComponent,
  ConsultationAdminComponent,
  ConsultationAdminDetailComponent,
  ItemAdminComponent,
  ListAdminComponent,
  DetailAdminComponent,
  ConsultationModifyAdminComponent,
  DashboardMedecinAdminComponent,
  DashboardMedecinDetailAdminComponent,
  MedecinDetailAdminComponent,
  MedecinItemAdminComponent,
  MedecinListAdminComponent,
  AddMedecinComponent,
  PatientAdminComponent,
  DetailPatientAdminComponent,
  ItemPatientAdminComponent,
  ListPatientAdminComponent,
  ModifierPatientAdminComponent,
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ToastrModule.forRoot({preventDuplicates:true,timeOut:2000,easeTime:300})
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptor,
    multi: true,
  },],
  bootstrap: [AppComponent]
})
export class AppModule { }
