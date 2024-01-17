import { ConsultationAbs } from "src/app/common/consultationAbs";
import { Patient } from "./patient";

export class Consultation  extends ConsultationAbs{

  constructor( public patient: Patient = new Patient()) {
    super();
  }
}

