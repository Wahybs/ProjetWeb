import { UserRoleEnum } from '../../user/entities/user.entity';

export class JwtPayloadDto {
  email:string;
 token: string;
  role: UserRoleEnum;
}
