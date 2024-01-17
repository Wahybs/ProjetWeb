import { ConsultationAbs } from "src/app/common/consultationAbs";
import { Medecin } from "./medecin";


export class ConsultationPatient  extends ConsultationAbs{

  constructor( public medecin: Medecin = new Medecin()) {
    super();
  }
}

