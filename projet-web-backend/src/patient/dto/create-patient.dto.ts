import { Transform } from "class-transformer";
import {  IsDate, IsNotEmpty, IsString } from "class-validator";
import { validationMessages } from "src/common-module/error";

export class CreatePatientDto {
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
    @Transform(({value})=>new Date (value))
    @IsDate({
        message: validationMessages.IS_DATE('dateDeNaissance')
    })
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
