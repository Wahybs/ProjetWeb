import { UserController } from './user.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserEntity } from './entities/user.entity';
import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { PatientEntity } from 'src/patient/entities/patient.entity';



@Module({
  controllers: [UserController],
  providers: [UserService],
  exports: [UserService],
  imports: [
    TypeOrmModule.forFeature(
      [UserEntity,PatientEntity]
    )
  ]
})
export class UserModule {}
