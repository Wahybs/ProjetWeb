import { Component, Input, inject } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Subject, takeUntil } from 'rxjs';
import { MedecinAdminService } from '../MedecinAdmin.service';
import { MedecinAdmin } from '../model/medecinAdmin';

@Component({
  selector: 'app-dashboard-medecin-detail',
  templateUrl: './dashboard-medecin-detail.component.html',
  styleUrls: ['./dashboard-medecin-detail.component.css']
})
export class DashboardMedecinDetailAdminComponent {
  @Input()
medecin = new MedecinAdmin();

  subject = new Subject();
  private medecinservice = inject(MedecinAdminService);

  constructor(private router: Router, private toastr: ToastrService) {

    this.medecinservice.selectMedecin$
      .pipe(
        takeUntil(this.subject)
      )
      .subscribe(
        (medecin: MedecinAdmin) => this.medecin = medecin
      )


  }
 
  Delete() {
    this.medecinservice.deleteMedecin(this.medecin.id)
    .subscribe({
      next: () => {
        this.toastr.success("Medecin supprimé");
      },
      error: () => {
        this.toastr.warning("Connexion a l'API à échouer");
      }
    });

  }

}
