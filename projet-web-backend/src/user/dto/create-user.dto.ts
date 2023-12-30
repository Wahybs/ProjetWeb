import { IsEmail, IsEnum, IsNotEmpty, IsString } from "class-validator";
import { validationMessages } from "src/common-module/error";
import { UserRoleEnum } from "../enum/user-role.enum";

export class CreateUserDto {

    @IsNotEmpty({
        message: validationMessages.required('email')
    })
     @IsEmail({}, { message: 'Invalid email format' })
    email: string;

    @IsString({
        message: validationMessages.IS_STRING('password')
    })
    @IsNotEmpty({
        message: validationMessages.required('password')
    })
    password: string;

    @IsEnum(UserRoleEnum,{})
    @IsNotEmpty({
        message: validationMessages.required('role')
    })
   role: UserRoleEnum;
}
