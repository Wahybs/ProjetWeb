import { UserController } from './user.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserEntity } from './entities/user.entity';
import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { PatientEntity } from 'src/patient/entities/patient.entity';
import { JwtModule } from '@nestjs/jwt';
import * as dotenv from 'dotenv';
import { MedecinEntity } from 'src/medecin/entities/medecin.entity';

dotenv.config();
@Module({
  controllers: [UserController],
  providers: [UserService],
  exports: [UserService],
  imports: [
    TypeOrmModule.forFeature(
      [UserEntity,PatientEntity,MedecinEntity]
    ),
    JwtModule.register({
      secret: process.env.SECRET,
      signOptions: { expiresIn: 3600 },
    }),
 
  ]
})
export class UserModule {}
