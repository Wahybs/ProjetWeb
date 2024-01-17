export class Patient {
    
    constructor(
        public nom = "",
        public prenom = "",
        public age = 0,
        public cin = "",
        public path = "",
        public dateDeNaissance=""
      ) {
        
        this.nom=nom;
        this.prenom=prenom;
        this.age = age;
         this.path = path;
         this.cin = cin;
         this.dateDeNaissance=dateDeNaissance;
      }
      
    }