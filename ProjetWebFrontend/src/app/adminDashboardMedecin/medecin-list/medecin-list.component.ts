import { Component, Input } from '@angular/core';
import { MedecinAdmin } from '../model/medecinAdmin';

@Component({
  selector: 'app-medecin-list',
  templateUrl: './medecin-list.component.html',
  styleUrls: ['./medecin-list.component.css']
})
export class MedecinListAdminComponent {
  @Input() 
  medecins: MedecinAdmin[] = [];
  initialId: number=1;
}
