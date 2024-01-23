export class ConsultationAbs {
  constructor(
   // public num : number=0 ,
    public createdAt: string | null = null,
    public diagnostic: string = '',
    public prescription: {
      medicaments: {
        nom: string;
        dosage: string;
      }[];
    } = { medicaments: [] }
  ) {}
}

