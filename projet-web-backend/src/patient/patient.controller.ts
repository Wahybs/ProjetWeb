import { Controller, Get, Post,Body,Delete,Param, UseGuards, Req } from '@nestjs/common';
import { PatientService } from './patient.service';
import { PatientEntity } from './entities/patient.entity';
import { CreatePatientDto } from './dto/create-patient.dto';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';
import { AdminGuard } from 'src/consultation/guards/admin.guard';



@Controller('patient')
export class PatientController {
    constructor(private readonly PatientService: PatientService) {}
    @Post()
    async create(@Body() patientData: CreatePatientDto): Promise<PatientEntity> {
      return this.PatientService.create(patientData);
    }
    
    @Get()
    @UseGuards(JwtAuthGuard,AdminGuard)
    async findAll(): Promise<PatientEntity[]> {
      return this.PatientService.findAll();
    }
 
    @Get(':id')
    @UseGuards(JwtAuthGuard,AdminGuard)
    async findOne(@Param('id') id: string): Promise<PatientEntity> {
      return this.PatientService.findOne(id);
    }
    @Delete(':id')
    @UseGuards(JwtAuthGuard,AdminGuard)
    async delete(@Param('id') id: string): Promise<void> {
       this.PatientService.remove(id);
    }
    
}
