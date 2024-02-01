import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { addDoctorDTO } from './dto/signup.dto';
import { addDoctorService } from './addDoctor.service';

@Component({
  selector: 'app-add-medecin',
  templateUrl: './add-medecin.component.html',
  styleUrls: ['./add-medecin.component.css']
})
export class AddMedecinComponent {
  constructor(
    private doctorService: addDoctorService,
    private toastr: ToastrService
  ) { }

  submitDoctorForm(formData: any): void {
    this.doctorService.addDoctor(formData).subscribe({
      next: () => {
        this.toastr.success('Médecin ajouté avec succès', 'Succès');
      },
      error: () => {
        this.toastr.error('Erreur lors de l\'ajout du médecin', 'Erreur');
      }
    });
  }
}
