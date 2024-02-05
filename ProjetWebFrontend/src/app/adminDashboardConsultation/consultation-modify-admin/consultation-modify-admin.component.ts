import { Component } from '@angular/core';
import { NgModel } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ConsultationDto } from 'src/app/addConsultation/dto/consultation.dto';
import { Consultation } from 'src/app/medecin/model/consultation';
import { ConsultationAdminService } from '../consultationAdmin.service';
import { UpdateConsultation } from '../model/updateConsultation';

@Component({
  selector: 'app-consultation-modify-admin',
  templateUrl: './consultation-modify-admin.component.html',
  styleUrls: ['./consultation-modify-admin.component.css']
})
export class ConsultationModifyAdminComponent {
  consultation = new UpdateConsultation();
  consultationId : string ="";
  constructor(
    private activerouter : ActivatedRoute,
     private router : Router ,
     private toastr : ToastrService,
     private consultationService : ConsultationAdminService
     ){
      this.consultationId = activerouter.snapshot.params['id'];
      this.consultationService.getConsultationById(this.consultationId).subscribe({
        next: (consultation: UpdateConsultation) => {
          this.consultation = consultation;
        },
        error: (err) => {
          this.toastr.error('Error fetching consultation', err);
        }
      });
     }
  submitDoctorForm(consultation:UpdateConsultation): void {
    this.consultationService.modifyConsultation(this.consultationId,consultation)
    .subscribe({
      next: () => {
        this.router.navigate(['admin/dashboard']);
        this.toastr.success('Consultation added successfully', 'Success');
      },
      error: () => {
        this.toastr.error('Error adding consultation', 'Error');
      }
    });
  }
  }

