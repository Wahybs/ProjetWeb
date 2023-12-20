import { Injectable } from '@nestjs/common';
import { CrudService } from 'src/common-module/GenericCRUD';
import { PrescriptionEntity } from './entities/prescription.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class PrescriptionService  extends CrudService <PrescriptionEntity>{

    constructor( @InjectRepository(PrescriptionEntity)
    private readonly prescriptionRepo: Repository<PrescriptionEntity>,
  ) {
     super (prescriptionRepo);
  }

}
