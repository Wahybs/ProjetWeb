import { Injectable, NotFoundException, UnauthorizedException } from '@nestjs/common';
import { ConsultationEntity } from './entities/consultation.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CrudService } from 'src/common-module/GenericCRUD';
import { UserEntity } from 'src/user/entities/user.entity';
import { CreateConsultationDto } from './dto/consultation.dto';
import { PrescriptionEntity } from 'src/prescription/entities/prescription.entity';
import { PatientEntity } from 'src/patient/entities/patient.entity';
import { MedecinEntity } from 'src/medecin/entities/medecin.entity';

@Injectable()
export class ConsultationService extends CrudService<ConsultationEntity> {

    constructor( @InjectRepository(ConsultationEntity)
    private readonly consultationRepo: Repository<ConsultationEntity>,
    @InjectRepository(PatientEntity)
    private patientRepository: Repository<PatientEntity>,
    @InjectRepository(PrescriptionEntity)
    private prescriptionRepository: Repository<PrescriptionEntity>,
    @InjectRepository(MedecinEntity)
    private medecinRepository: Repository<MedecinEntity>,
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
   async createConsultation (user:UserEntity ,consultationdto: CreateConsultationDto): Promise<ConsultationEntity>{
// 1. Recherche du patient par son CIN
const cin = consultationdto.cin;
const patient = await this.patientRepository.findOne({ where: { cin } });

if (!patient) {
  throw new NotFoundException('Patient not found');
}

// 2. Création de la prescription
const medications = consultationdto.medicaments;
const prescription = await this.prescriptionRepository.save({ medicaments: medications });

// 3. Création de la consultation
const id = user.id;
const medecin = await this.medecinRepository.findOne({ where: { id } });
const consultation = await this.consultationRepo.create({
  diagnostic: consultationdto.diagnostic,
  patient: patient,
  prescription: prescription,
  medecin:medecin
});

// Enregistrement de la consultation dans la base de données
return this.consultationRepo.save(consultation);
}

   }


