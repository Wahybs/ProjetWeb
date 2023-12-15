import { Controller, Get, Post, Body, Patch, Param, Delete, Req, Request, HttpException, HttpStatus } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Controller('user')
export class UserController {
  constructor(private readonly usersService: UserService) {}

  @Post()
  create(@Body() createUserDto: CreateUserDto) {
    return this.usersService.create(createUserDto);
  }
  @Post("login")
  async login(@Body()logindto:{email:string,password:string}){
    try {
      // Validate the user credentials
      const user = await this.usersService.validateUser(logindto.email,logindto.password);
      if (!user) {
        throw new HttpException('Invalid credentials', HttpStatus.UNAUTHORIZED);
      }

      // Generate a token for the authenticated user
      const token = this.usersService.generateToken(user);

      // Return the token or user information
      return { token: token, user: user };
    } catch (error) {
      // Handle any errors by sending an appropriate response
      throw new HttpException(error.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }
  @Get()
  findAll() {
    return this.usersService.findAll();
  }

  @Get("current")
  findCurrent(@Request() req: Request){
    return req["user"]
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

