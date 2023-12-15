import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UserEntity } from './entities/user.entity';
import * as bcrypt from 'bcrypt';
import { CrudService } from 'src/common-module/GenericCRUD';
import * as jwt from 'jsonwebtoken';
@Injectable()
export class UserService extends CrudService<UserEntity>{
  constructor(
    @InjectRepository(UserEntity)
    private readonly userRepository: Repository<UserEntity>,
  ) {
    super(userRepository);
  
  }

  private readonly jwtSecret = 'test'; // Replace with your secret key
  private readonly jwtExpiresIn = '60m'; // Token expiration time
  async create(createUserDto: CreateUserDto) {
    const user = new UserEntity();
    user.email = createUserDto.email;
    
    user.hash = bcrypt.genSaltSync();
    user.password = await bcrypt.hash(createUserDto.password, user.hash);
    return this.userRepository.save(user);
  }

  async findByEmail(email: string) {
    return this.userRepository.findOne({ where: { email } });
  }
  async update(id: string, updateUserDto: UpdateUserDto) {
    const user = await this.userRepository.findOne({ where: [{ id: id }] });
    if(updateUserDto.password){
      user.hash = bcrypt.genSaltSync();
      user.password = await bcrypt.hash(updateUserDto.password, user.hash);
    }
    user.email = updateUserDto.email ?? user.email;
   
    return this.userRepository.save(user);
  }
  async validateUser(email: string, pass: string): Promise<any> {
    // Fetch the user by email
    const user = await this.findByEmail(email);
    if (!user) {
      return null;
    }

    // Compare the provided password with the stored hashed password
    const isPasswordMatching = await bcrypt.compare(pass, user.password);
    if (!isPasswordMatching) {
      return null;
    }

    // If the email and password match, return the user data (excluding the password)
    const { password, ...result } = user;
    return result;
  }
  generateToken(user: any): string {
    const payload = { 
      email: user.email, 
      sub: user.id // 'sub' is a standard JWT claim for the subject (user identifier)
    };

    return jwt.sign(payload, this.jwtSecret, {
      expiresIn: this.jwtExpiresIn,
    });
  }
}
