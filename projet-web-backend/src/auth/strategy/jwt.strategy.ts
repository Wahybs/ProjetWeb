import { Injectable, NotFoundException, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { JwtPayloadDto } from './../dto/jwtpayload.dto';
import { UserService } from '../../user/user.service';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(private userService: UserService, private configService:ConfigService) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey: configService.get('SECRET'),
    });
  }
  async validate(jwtPayloadDto: JwtPayloadDto) { 
    const user = await this.userService.findByEmail(
      jwtPayloadDto.email,
    );
    if (!user)
    throw new NotFoundException();

    if (user) 
    {
      delete user.password;
      delete user.hash;
      delete user .createdAt;
      delete user.deletedAt;
      delete user.updatedAt;
    
     return user;
    }
   else {
    throw new UnauthorizedException();
   }
    
  }
}
