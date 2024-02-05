import { Transform } from "class-transformer";
import { IsDate, IsEmail,  IsNotEmpty, IsString } from "class-validator";
import { validationMessages } from "src/common-module/error";

//signup
export class CreateNewUserDto {

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
    @IsString({
        message: validationMessages.IS_STRING('nom')
    })
    @IsNotEmpty({
        message: validationMessages.required('nom')
    })
    nom: string;
    @IsString({
        message: validationMessages.IS_STRING('prenom')
    })
    @IsNotEmpty({
        message: validationMessages.required('prenom')
    })
    prenom: string;
    @IsString({
        message: validationMessages.IS_STRING('age')
    })
    @IsNotEmpty({
        message: validationMessages.required('age')
    })
    age: string;

    @IsDate({
        message: validationMessages.IS_DATE('dateDeNaissance')
    })
    @Transform(({ value }) => new Date(value))
    @IsNotEmpty({
        message: validationMessages.required('dateDeNaissance')
    })
    dateDeNaissance: Date;

    @IsString({
        message: validationMessages.IS_STRING('cin')
    })
    @IsNotEmpty({
        message: validationMessages.required('cin')
    })
    cin:string;



}
