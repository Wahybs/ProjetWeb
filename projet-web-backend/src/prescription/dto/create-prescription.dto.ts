import {  IsJSON, IsNotEmpty } from "class-validator";
import { validationMessages } from "src/common-module/error";

export class CreatePrescriptionDto {
    @IsNotEmpty({
        message: validationMessages.IS_JSON('medicaments')
    })
    @IsJSON({
        message: validationMessages.IS_JSON('medicaments')
    })
    medicaments: { nom: string; dosage: string }[];
}