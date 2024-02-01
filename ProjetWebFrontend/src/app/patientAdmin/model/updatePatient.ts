export class UpdatePatient {
    
    constructor(
        public nom = "",
        public prenom = "",
        public age = 0,
        public cin = "",
        public dateDeNaissance =""
      ) {
        
        this.nom=nom;
        this.prenom=prenom;
        this.age = age;
         this.cin = cin;
         this.dateDeNaissance=dateDeNaissance;
      }
      
    }