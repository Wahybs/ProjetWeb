export interface ConsultationDto {
 cin: string;
 diagnostic: string;
 medicaments: { nom: string; dosage: string }[];
  }