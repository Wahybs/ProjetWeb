import { Controller, Get, Post, Body, Patch, Param } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { CreateNewUserDto } from './dto/create-new-user.dto';

@Controller('user')
export class UserController {
  constructor(private readonly usersService: UserService) {}

 /* @Post()
  create(@Body() createUserDto: CreateUserDto) {
    return this.usersService.create(createUserDto);
  }*/

  @Post()
  createNewUser(@Body() createNewUserDto:CreateNewUserDto) {
    return this.usersService.signup(createNewUserDto);
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

