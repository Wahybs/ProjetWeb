import { Component, EventEmitter, Input, Output } from "@angular/core";
import {  Consultation } from "../model/consultation";
import { ConsultationService } from "../consultation.service";


@Component({
  selector: "app-item",
  templateUrl: "./item.component.html",

})
export class ItemComponent {
  @Input()
  consultation: Consultation | null = null; 
  @Input()
  consultationId:number=1;
constructor(private consultationservice : ConsultationService){}
  onSelectConsultation() {
    if (this.consultation)
    this.consultationservice.selectConsultation(this.consultation)
  }
}