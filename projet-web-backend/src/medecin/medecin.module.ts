import { Module } from '@nestjs/common';
import { MedecinController } from './medecin.controller';
import { MedecinService } from './medecin.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MedecinEntity } from './entities/medecin.entity';

@Module({
  controllers: [MedecinController],
  providers: [MedecinService],
  imports: [TypeOrmModule.forFeature(
    [ MedecinEntity]
  )]
})
export class MedecinModule {}
