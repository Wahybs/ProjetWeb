import { Injectable, NotFoundException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { JwtPayloadDto } from './../dto/jwtpayload.dto';
import { UserService } from '../../user/user.service';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(private userService: UserService) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey: 'RT4',
    });
  }

  async validate(jwtPayloadDto: JwtPayloadDto) {
    const user = await this.userService.findByEmail(
      jwtPayloadDto.email,
    );
    if (!user) throw new NotFoundException();

    return user;
  }
}
