import { Injectable, CanActivate, ExecutionContext, UnauthorizedException } from '@nestjs/common';
import { Observable } from 'rxjs';
import { UserEntity } from 'src/user/entities/user.entity';

@Injectable()
export class MedecinGuard implements CanActivate {
  
  canActivate(context: ExecutionContext): boolean | Promise<boolean> | Observable<boolean> {
    const request = context.switchToHttp().getRequest();
    const user: UserEntity = request.user;
    if (!user || !user.role || user.role !== 'medecin') {
      // Si l'utilisateur n'est pas authentifié, s'il n'a pas de rôle ou si son rôle n'est pas 'medecin', le guard bloque l'accès
      throw new UnauthorizedException('You do not have the required role to access this resource.');
    }

    return true;
  }
}
