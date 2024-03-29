
export class UpdateConsultation {
    constructor(
        public diagnostic: string = '',
        public prescription: {
            medicaments: {
              nom: string;
              dosage: string;
            }[];
          } = { medicaments: [] },
        public patient: { cin: string } = { cin: '' }
      ) {}
  }