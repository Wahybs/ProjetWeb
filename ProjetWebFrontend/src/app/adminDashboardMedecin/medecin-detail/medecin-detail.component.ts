import { Component, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { distinctUntilChanged } from 'rxjs';
import { Medecin } from 'src/app/patient/model/medecin';
import { MedecinAdminService } from '../MedecinAdmin.service';

@Component({
  selector: 'app-medecin-detail',
  templateUrl: './medecin-detail.component.html',
  styleUrls: ['./medecin-detail.component.css']
})
export class MedecinDetailAdminComponent {
  @Input()
  medecins: Medecin []  = [];
  selectedMedecin: Medecin |null=null;
   constructor( private activerouter : ActivatedRoute, 
    private Medecinservice : MedecinAdminService,
    private  router : Router,
    private toastr: ToastrService
    ) {
    const MedecinId = activerouter.snapshot.params['id'];
    
   // this.Medecinservice.getMedecins$(MedecinId).subscribe({
    //  next: (item)=>{
      //   this.Medecins = item;
       //  this.Medecinservice.setterMedecins(item)
      // },
     //error:(error)=>{
      //   this.toastr.warning("Connexion a l'API à échouer ");
    // }
   //});
   //this.Medecinservice.selectMedecin$
   //.pipe(
   //  distinctUntilChanged()
   //)
    
    
  }
}
