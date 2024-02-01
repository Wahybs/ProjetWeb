import { Controller, Get, Post, Body, Patch, Param, UseGuards } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { CreateNewUserDto } from './dto/create-new-user.dto';
import { CreateNewDoctorDto } from './dto/create-new-doctor.dto';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';
import { AdminGuard } from 'src/consultation/guards/admin.guard';

@Controller('user')
export class UserController {
  constructor(private readonly usersService: UserService) {}

  @Post('/admin')
  create(@Body() createUserDto: CreateUserDto) {
    return this.usersService.create(createUserDto);
  }

  @Post()
  createNewUser(@Body() createNewUserDto:CreateNewUserDto) {
    return this.usersService.signup(createNewUserDto);
  }
 
@UseGuards(JwtAuthGuard,AdminGuard)
  @Post('/admin/addmedecin')
  createNewDocotr(@Body() createNewDoctorDto:CreateNewDoctorDto) {
    return this.usersService.enregistrerMedecin(createNewDoctorDto);
  } 

  @Get()
  findAll() {
    return this.usersService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.usersService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.usersService.update(id, updateUserDto);
  }
}

