import { Component, Input } from '@angular/core';
import { MedecinAdminService } from '../MedecinAdmin.service';
import { MedecinAdmin } from '../model/medecinAdmin';

@Component({
  selector: 'app-medecin-item',
  templateUrl: './medecin-item.component.html',
  styleUrls: ['./medecin-item.component.css']
})
export class MedecinItemAdminComponent {

  @Input()
  medecin: MedecinAdmin | null = null; 
  @Input()
  medecinId:number=1;
constructor( private medecinservice : MedecinAdminService){
}
onSelectmedecin() {
  if (this.medecin)
  this.medecinservice.selectMedecin(this.medecin)
}
}
