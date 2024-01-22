import { Component } from '@angular/core';
import { NgForm, NgModel } from '@angular/forms';
import { ConsultationDto } from './dto/consultation.dto';
import { AddConsultationService } from './addconsultation.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-add-consultation',
  templateUrl: './addConsultation.component.html',
  
})
export class AddConsultationComponent {

  medications: { nom: string; dosage: string }[] = [];

  constructor(private consultationService: AddConsultationService ,
     private router : Router ,
     private toastr : ToastrService
     ){}
  addMedication(medicamentModel:NgModel , dosageModel:NgModel): void {
    const medication = {
      nom: medicamentModel.value,
      dosage: dosageModel.value,
    };
    this.medications.push(medication);
  }
  submitDoctorForm(consultation:ConsultationDto): void {
    consultation.medicaments=this.medications;
    this.consultationService.addConsultation(consultation)
    .subscribe({
      next: (response) => {
        
        this.router.navigate(['medecin/dashboard']);
        this.toastr.success('Consultation added successfully', 'Success');
      },
      error: (error) => {
        this.toastr.error('Error adding consultation', 'Error');
      }
    });
  }

}
