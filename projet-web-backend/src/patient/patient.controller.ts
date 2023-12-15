import { Controller, Get, Post,Body,Delete,Param } from '@nestjs/common';
import { PatientService } from './patient.service';
import { PatientEntity } from './entities/patient.entity';
import { CreatePatientDto } from './dto/create-patient.dto';

@Controller('patient')
export class PatientController {
    constructor(private readonly PatientService: PatientService) {}
    @Get()
    async findAll(): Promise<PatientEntity[]> {
      return this.PatientService.findAll();
    }
    @Post()
    async create(@Body() patientData: CreatePatientDto): Promise<PatientEntity> {
      return this.PatientService.create(patientData);
    }
    @Get(':id')
    async findOne(@Param('id') id: string): Promise<PatientEntity> {
      return this.PatientService.findOne(id);
    }
    @Delete(':id')
    async delete(@Param('id') id: string): Promise<void> {
       this.PatientService.remove(id);
    }
    
}
