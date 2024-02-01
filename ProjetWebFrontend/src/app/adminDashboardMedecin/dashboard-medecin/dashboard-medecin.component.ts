import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { distinctUntilChanged } from 'rxjs';
import { Medecin } from 'src/app/patient/model/medecin';
import { MedecinAdminService } from '../MedecinAdmin.service';
import { MedecinAdmin } from '../model/medecinAdmin';

@Component({
  selector: 'app-dashboard-medecin',
  templateUrl: './dashboard-medecin.component.html',
  
})
export class DashboardMedecinAdminComponent {
  selectedMedecin: MedecinAdmin |null=null;
  medecins : MedecinAdmin[] =[];
  constructor( private medecinservice : MedecinAdminService ,
   private toastr:ToastrService ) {
    this.medecinservice.getAllMedecins$().subscribe({
     next: (item)=>{
       this.medecins = item;
        this.medecinservice.setterMedecin(item)
      },
    error:(error)=>{
        this.toastr.warning("Connexion a l'API à échouer ");
    }
  });
 
  this.medecinservice.selectMedecin$
  .pipe(
    distinctUntilChanged()
  )
 
  }
}
