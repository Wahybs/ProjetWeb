import { Patient } from "src/app/medecin/model/patient";


export class PatientAdmin  extends Patient {
  
  constructor( 
              public patient = new Patient(),
               public  createdAt :  string ='',
               public updatedAt : string ='',
              public deletedAt : string ='',
             public id :  string =''
  ) {
    super();
  }
}