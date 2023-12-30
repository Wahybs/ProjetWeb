import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UserService } from '../user/user.service';
import { SigninDto } from './dto/signin.dto';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';
import { JwtDto } from './dto/jwt.dto';
@Injectable()
export class AuthService {
  constructor(
    private userService: UserService,
    private jwtService: JwtService,
  ) {}

  async signIn(signinDto: SigninDto): Promise<JwtDto> {
    /* Vérifier est ce que le user existe ou pas */
    const user = await this.userService.findByEmail(
      signinDto.email,
    );
    /* Si oui */
    if (!user)
      throw new UnauthorizedException('Veuillez vérifier vos credentials !');
    const isLoggedIn = await bcrypt.compare(signinDto.password, user.password);
    /* Vérifier le mdp */
    /* Si ok */
    /* On envoi le user */
    if (isLoggedIn) {
      const jwtPayload= {
        id:user.id,
        email:user.email,
        role: user.role,
      };
      
      return { jwt: this.jwtService.sign(jwtPayload) };
    }
    throw new UnauthorizedException('Veuillez vérifier vos credentials !');
    /* Si ko */
    /* Erreur de connexion */
    /* Si non */
    /* Erreur de connexion */
  }
}
