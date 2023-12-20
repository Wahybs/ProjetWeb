import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';
import { Reflector } from '@nestjs/core';

@Injectable()
export class RolesGuard implements CanActivate {
  constructor(private readonly reflector: Reflector) {}

  canActivate(context: ExecutionContext): boolean {
    const roles = this.reflector.get<string[]>('roles', context.getHandler());
    if (!roles) {
      return true; // Si aucun rôle spécifié, autorise l'accès
    }
    
    const request = context.switchToHttp().getRequest();
    const user = request.user; // Vous devez avoir une méthode pour récupérer l'utilisateur actuel

    // Vérifiez le rôle de l'utilisateur
    // (simplement à titre d'exemple, adaptez cela à votre logique d'autorisation spécifique)
    const isAdmin = user.role === 'admin';
    const isDoctor = user.role === 'doctor';

    return roles.some(role => role === 'admin' ? isAdmin : (role === 'doctor' ? isDoctor : false));
  }
}

