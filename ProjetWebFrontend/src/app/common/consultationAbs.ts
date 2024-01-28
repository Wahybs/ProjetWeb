export class ConsultationAbs {
  constructor(
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

