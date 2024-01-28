import { Component, Input } from '@angular/core';
import { Medecin } from 'src/app/patient/model/medecin';

@Component({
  selector: 'app-medecin-list',
  templateUrl: './medecin-list.component.html',
  styleUrls: ['./medecin-list.component.css']
})
export class MedecinListAdminComponent {
  @Input() 
  medecins: Medecin[] = [];
  initialId: number=1;
}
