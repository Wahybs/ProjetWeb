import { Injectable, UnauthorizedException } from '@nestjs/common';
import { ConsultationEntity } from './entities/consultation.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CrudService } from 'src/common-module/GenericCRUD';
import { UserEntity } from 'src/user/entities/user.entity';

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

async findAllByMedecin(user :UserEntity): Promise<ConsultationEntity[]> {
    return this.consultationRepo.createQueryBuilder('consultation')
      .leftJoin('consultation.medecin', 'medecin')
      .leftJoinAndSelect('consultation.patient', 'patient')
      .leftJoinAndSelect('consultation.prescription', 'prescription')
      .select([
        'consultation.diagnostic',
        'patient.nom',
        'patient.prenom',
        'patient.age',
        'patient.dateDeNaissance',
        'prescription.medicaments',
      ])
      .where('medecin.id = :userId', { userId: user.id })
      .getMany();
 
}

}
