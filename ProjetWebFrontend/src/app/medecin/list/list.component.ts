import { Component, Input, EventEmitter, Output } from "@angular/core";
import { Consultation } from "../model/consultation";

@Component({
  selector: "app-list",
  templateUrl: "./list.component.html"

})
export class ListComponent {
  @Input() consultations: Consultation[] = [];
initialId: number=1;

}