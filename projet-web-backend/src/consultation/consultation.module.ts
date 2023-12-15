import { Module } from '@nestjs/common';
import { ConsultationController } from './consultation.controller';
import { ConsultationService } from './consultation.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConsultationEntity } from './entities/consultation.entity';

@Module({
  controllers: [ConsultationController],
  providers: [ConsultationService],
  imports: [TypeOrmModule.forFeature(
    [ ConsultationEntity]
  )]
})
export class ConsultationModule {}
