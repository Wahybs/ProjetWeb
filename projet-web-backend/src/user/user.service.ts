import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UserEntity } from './entities/user.entity';
import * as bcrypt from 'bcrypt';
import { CrudService } from 'src/common-module/GenericCRUD';
import { CreateNewUserDto } from './dto/create-new-user.dto';
import { PatientEntity } from 'src/patient/entities/patient.entity';
import { PatientService } from 'src/patient/patient.service';
import { UserRoleEnum } from './enum/user-role.enum';
import { JwtService } from '@nestjs/jwt';
import { JwtDto } from 'src/auth/dto/jwt.dto';

@Injectable()
export class UserService extends CrudService<UserEntity>{
  constructor(
    @InjectRepository(UserEntity)
    private readonly userRepository: Repository<UserEntity>,
    @InjectRepository(PatientEntity)
    private readonly patientRepository: Repository<PatientEntity>,
    private jwtService: JwtService
  ) {
    super(userRepository);

  }

  async create(createUserDto: CreateUserDto) {
    const user = new UserEntity();
    user.email = createUserDto.email;
    user.role = createUserDto.role;
    user.hash = bcrypt.genSaltSync();
    user.password = await bcrypt.hash(createUserDto.password, user.hash);
    return this.userRepository.save(user);
  }

  async findByEmail(email: string) {
    return this.userRepository.findOne({ where: { email } });
  }
  async update(id: string, updateUserDto: UpdateUserDto) {
    const user = await this.userRepository.findOne({ where: [{ id: id }] });
    if (updateUserDto.password) {
      user.hash = bcrypt.genSaltSync();
      user.password = await bcrypt.hash(updateUserDto.password, user.hash);
    }
    user.email = updateUserDto.email ?? user.email;

    return this.userRepository.save(user);
  }

  async signup(createnewuserdto: CreateNewUserDto): Promise<JwtDto> {
    const user = new UserEntity();
    user.email = createnewuserdto.email;
    user.password = createnewuserdto.password;
    user.role = UserRoleEnum.patient;
    await this.create(user);
    const patient = new PatientEntity();
    patient.age = createnewuserdto.age;
    patient.cin = createnewuserdto.cin;
    patient.dateDeNaissance = createnewuserdto.dateDeNaissance;
    patient.nom = createnewuserdto.nom;
    patient.prenom = createnewuserdto.prenom;
    await this.patientRepository.save(patient);
    const jwtPayload = {
      id: user.id,
      email: user.email,
      role: user.role,
    };

    return { jwt: this.jwtService.sign(jwtPayload) };
  }


}
