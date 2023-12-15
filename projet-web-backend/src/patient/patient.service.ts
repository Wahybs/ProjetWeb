import { Injectable } from '@nestjs/common';
import { CrudService } from 'src/common-module/GenericCRUD';
import { PatientEntity } from './entities/patient.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class PatientService extends CrudService <PatientEntity> {

    constructor( @InjectRepository(PatientEntity)
    private readonly patientRepo: Repository<PatientEntity>,
  ) {
    super (patientRepo);
  }
}
