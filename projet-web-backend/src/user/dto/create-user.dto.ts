import { IsEmail, IsNotEmpty, IsString } from "class-validator";
import { validationMessages } from "src/common-module/error";

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
}
