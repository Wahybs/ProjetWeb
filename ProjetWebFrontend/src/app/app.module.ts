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
