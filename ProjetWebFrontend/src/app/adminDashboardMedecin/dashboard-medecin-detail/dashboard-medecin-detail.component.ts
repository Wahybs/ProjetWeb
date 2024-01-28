import { Component, Input, inject } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Subject, takeUntil } from 'rxjs';
import { Medecin } from 'src/app/patient/model/medecin';
import { MedecinAdminService } from '../MedecinAdmin.service';

@Component({
  selector: 'app-dashboard-medecin-detail',
  templateUrl: './dashboard-medecin-detail.component.html',
  styleUrls: ['./dashboard-medecin-detail.component.css']
})
export class DashboardMedecinDetailAdminComponent {
  @Input()
  medecin: Medecin = new Medecin();

  subject = new Subject();
  private medecinservice = inject(MedecinAdminService);

  constructor(private router: Router, private toastr: ToastrService) {

    this.medecinservice.selectMedecin$
      .pipe(
        takeUntil(this.subject)
      )
      .subscribe(
        (medecin: Medecin) => this.medecin = medecin
      )


  }
  ngOnDestroy(): void {
    this.subject.next('je complete tout mes observateurs');
    this.subject.complete();
  }
  Delete() {
    //this.medecinservice.deletemedecin(this.medecin.id)
   // .subscribe({
     // next: () => {
     // },
     // error: () => {
     //   this.toastr.warning("Connexion a l'API à échouer");
     // }
   // });

  }

}
