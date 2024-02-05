import { Injectable, CanActivate, ExecutionContext, UnauthorizedException } from '@nestjs/common';
import { Observable } from 'rxjs';
import { UserEntity } from 'src/user/entities/user.entity';
import { UserRoleEnum } from 'src/user/enum/user-role.enum';

@Injectable()
export class MedecinGuard implements CanActivate {
  
  canActivate(context: ExecutionContext): boolean | Promise<boolean> | Observable<boolean> {
    const request = context.switchToHttp().getRequest();
    const user: UserEntity = request.user;
    if (!user || !user.role || user.role !== UserRoleEnum.medecin  ) {
      throw new UnauthorizedException('You do not have the required role to access this resource.');
    }

    return true;
  }
}