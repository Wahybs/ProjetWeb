import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CommonModuleModule } from './common-module/common-module.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserEntity } from './user/entities/user.entity';
import { UserModule } from './user/user.module';
import { PatientModule } from './patient/patient.module';
import { ConsultationModule } from './consultation/consultation.module';
import { PrescriptionModule } from './prescription/prescription.module';
import { PatientEntity } from './patient/entities/patient.entity';
import { PrescriptionEntity } from './prescription/entities/prescription.entity';
import { ConsultationEntity } from './consultation/entities/consultation.entity';
import { MedecinModule } from './medecin/medecin.module';
import { MedecinEntity } from './medecin/entities/medecin.entity';
import { RolesGuard } from './common-module/roles.guard';
import { AuthModule } from './auth/auth.module';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';

@Module({
  imports: [
    AuthModule,
    CommonModuleModule,
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '',
      database: 'med',
      entities: [ PatientEntity,PrescriptionEntity,ConsultationEntity,MedecinEntity,UserEntity],
      synchronize: true,
      logging: true,
    }), UserModule, PatientModule, ConsultationModule, PrescriptionModule, MedecinModule, AuthModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
