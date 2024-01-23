import { Medecin } from  "src/app/patient/model/medecin";

export class MedecinAdmin  extends Medecin {
  
  constructor( 
              public medecin = new Medecin(),
               public  createdAt :  string ='',
               public updatedAt : string ='',
              public deletedAt : string ='',
             public id :  string =''
  ) {
    super();
  }
}