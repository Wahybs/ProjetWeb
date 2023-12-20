import { Module } from '@nestjs/common';
import { PrescriptionController } from './prescription.controller';
import { PrescriptionService } from './prescription.service';
import { PrescriptionEntity } from './entities/prescription.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  controllers: [PrescriptionController],
  providers: [PrescriptionService],
  imports: [TypeOrmModule.forFeature(
    [ PrescriptionEntity]
  )]
})
export class PrescriptionModule {}
