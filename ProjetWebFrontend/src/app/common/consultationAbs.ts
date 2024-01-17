export class ConsultationAbs {
  constructor(
    public id : number=0 ,
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

