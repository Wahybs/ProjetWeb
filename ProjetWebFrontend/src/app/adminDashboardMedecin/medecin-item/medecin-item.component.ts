import { Component, Input } from '@angular/core';
import { Medecin } from 'src/app/patient/model/medecin';
import { MedecinAdminService } from '../MedecinAdmin.service';

@Component({
  selector: 'app-medecin-item',
  templateUrl: './medecin-item.component.html',
  styleUrls: ['./medecin-item.component.css']
})
export class MedecinItemAdminComponent {

  @Input()
  medecin: Medecin | null = null; 
  @Input()
  medecinId:number=1;
constructor( private medecinservice : MedecinAdminService){
}
onSelectmedecin() {
  if (this.medecin)
  this.medecinservice.selectMedecin(this.medecin)
}
}
