import {  IsNotEmpty, IsString } from "class-validator";
import { validationMessages } from "src/common-module/error";

export class CreateMedecinDto {
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
        message: validationMessages.IS_STRING('specialite')
    })
    @IsNotEmpty({
        message: validationMessages.required('specialite')
    })
    specialite: string;
}
