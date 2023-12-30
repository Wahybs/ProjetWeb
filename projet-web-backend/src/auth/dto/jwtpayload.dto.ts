import { UserRoleEnum } from "src/user/enum/user-role.enum";

export class JwtPayloadDto {
  id: string;
  email:string;
  role: UserRoleEnum;
}
