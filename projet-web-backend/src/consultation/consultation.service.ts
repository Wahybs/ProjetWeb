import { Injectable, UnauthorizedException } from '@nestjs/common';
import { ConsultationEntity } from './entities/consultation.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CrudService } from 'src/common-module/GenericCRUD';

@Injectable()
export class ConsultationService extends CrudService<ConsultationEntity> {

    constructor( @InjectRepository(ConsultationEntity)
    private readonly consultationRepo: Repository<ConsultationEntity>,
  ) {
     super (consultationRepo);
  }
  async findAll(): Promise<ConsultationEntity[]> {
    return this.consultationRepo.createQueryBuilder('consultation')
      .leftJoinAndSelect('consultation.medecin', 'medecin')
      .leftJoinAndSelect('consultation.patient', 'patient')
      .leftJoinAndSelect('consultation.prescription', 'prescription')
      .getMany();
  }


  async findAllByMedecin(nom: string, prenom: string): Promise<ConsultationEntity[]> {
    return this.consultationRepo.createQueryBuilder('consultation')
      .leftJoinAndSelect('consultation.medecin', 'medecin')
      .where('medecin.nom = :nom AND medecin.prenom = :prenom', { nom, prenom })
      .getMany();}

async getAllByMedecin(user, nom: string, prenom: string): Promise<ConsultationEntity[]> {
  if (user.role === 'admin') {
    // Recherche par nom et prénom pour l'administrateur
    return this.consultationRepo.createQueryBuilder('consultation')
      .leftJoinAndSelect('consultation.medecin', 'medecin')
      .leftJoinAndSelect('consultation.patient', 'patient')
      .leftJoinAndSelect('consultation.prescription', 'prescription')
      .where('medecin.nom = :nom AND medecin.prenom = :prenom', { nom, prenom })
      .getMany();
  } else if (user.role === 'doctor') {
    // Recherche par ID du médecin pour le médecin
    const medecinId = user.id; // Assurez-vous que l'utilisateur a une propriété id
    return this.consultationRepo.createQueryBuilder('consultation')
      .leftJoinAndSelect('consultation.medecin', 'medecin')
      .leftJoinAndSelect('consultation.patient', 'patient')
      .leftJoinAndSelect('consultation.prescription', 'prescription')
      .where('medecin.id = :medecinId', { medecinId })
      .getMany();
  } else {
    throw new UnauthorizedException('Vous n\'avez pas les autorisations nécessaires.');
  }
}

}
