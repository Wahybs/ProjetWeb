import { ConsultationAbs } from "src/app/common/consultationAbs";
import { PatientAdmin } from "./patientAdmin";
import { MedecinAdmin } from "./medecinAdmin";



export class ConsultationAdmin  extends ConsultationAbs{
  
  constructor( public patient  = new PatientAdmin(),
               public medecin = new MedecinAdmin(),
               public id: string = ''
  ) {
    super();
  }
}
