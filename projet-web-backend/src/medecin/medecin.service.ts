import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CrudService } from 'src/common-module/GenericCRUD';
import { Repository } from 'typeorm';
import { MedecinEntity } from './entities/medecin.entity';


@Injectable()
export class MedecinService extends CrudService <MedecinEntity> {
    
      constructor( @InjectRepository(MedecinEntity)
        private readonly medecinRepo: Repository<MedecinEntity>,
      ) {
        super (medecinRepo);
      }
     async findAll(): Promise<MedecinEntity[]> {
      const medecins = await this.medecinRepo
      .createQueryBuilder('medecin')
      .select(['medecin.nom', 'medecin.prenom', 'medecin.specialite','medecin.path'])
      .getMany();
    return medecins;
      }
    }
    



