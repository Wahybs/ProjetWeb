import { Injectable, NotFoundException } from '@nestjs/common';
import { CrudService } from 'src/common-module/GenericCRUD';
import { PatientEntity } from './entities/patient.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UpdatePatientDto } from './dto/update-patient.dto';


@Injectable()
export class PatientService extends CrudService <PatientEntity> {
  

    constructor( @InjectRepository(PatientEntity)
    private readonly patientRepo: Repository<PatientEntity>,
  ) {
    super (patientRepo);
  }
  async findAll(): Promise<PatientEntity[]> {
    const patients = await this.patientRepo
    .createQueryBuilder('patient')
    .select(['patient.id','patient.nom', 'patient.prenom', 'patient.age','patient.path','patient.cin','patient.dateDeNaissance'])
    .getMany();
  return patients;
    }
    async modifierPatient(id: string, user: UpdatePatientDto) : Promise<PatientEntity>{
      const patient = await this.patientRepo.findOne({ where: { id } });

      if (!patient) {
        throw new NotFoundException('patient not found');
      }
      // Mettre à jour les champs de la patient avec les données du DTO
      patient.age = user.age;
      patient.cin=user.cin;
      patient.dateDeNaissance=user.dateDeNaissance;
      patient.nom=user.nom;
      patient.prenom=user.prenom;
      // Enregistrement de la patient dans la base de données
      return this.patientRepo.save(patient);
    }


    async findPatientById(id: string): Promise<PatientEntity> {
      const patient = await this.patientRepo
        .createQueryBuilder('patient')
        .select([
          'patient.id',
        'patient.nom',
        'patient.prenom',
        'patient.age',
        'patient.cin',
        'patient.path',
        'patient.dateDeNaissance'
        ])
        .where('patient.id = :id', { id })
        .getOne();
  
      if (!patient) {
        throw new NotFoundException('Patient not found');
      }
  
      return patient;
    }
}
