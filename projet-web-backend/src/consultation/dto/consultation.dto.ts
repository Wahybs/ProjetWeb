import {  IsNotEmpty, IsString } from "class-validator";
import { validationMessages } from "src/common-module/error";

export class CreateConsultationDto {
    @IsString({
        message: validationMessages.IS_STRING('diagnostic')
    })
    @IsNotEmpty({
        message: validationMessages.required('diagnostic')
    })
    diagnostic: string;
}
