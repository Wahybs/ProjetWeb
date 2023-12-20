import { Body, Controller, Post } from '@nestjs/common';
import { SigninDto } from './dto/signin.dto';
import { AuthService } from './auth.service';
import { JwtDto } from './dto/jwt.dto';


@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}
  @Post('signin')
  signin(@Body() signinDto: SigninDto): Promise<JwtDto> {
    return this.authService.signIn(signinDto);
  }

}
