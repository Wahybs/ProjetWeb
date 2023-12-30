import { Module } from '@nestjs/common';
import { ConsultationController } from './consultation.controller';
import { ConsultationService } from './consultation.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConsultationEntity } from './entities/consultation.entity';
import { PatientEntity } from 'src/patient/entities/patient.entity';
import { MedecinEntity } from 'src/medecin/entities/medecin.entity';
import { PrescriptionEntity } from 'src/prescription/entities/prescription.entity';

@Module({
  controllers: [ConsultationController],
  providers: [ConsultationService],
  imports: [TypeOrmModule.forFeature(
    [ ConsultationEntity,PatientEntity,MedecinEntity,PrescriptionEntity]
  )]
})
export class ConsultationModule {}
