import { ConsultationService } from './consultation.service';
import { Controller, Get, Param,Post ,Body ,Delete, UseGuards, Req} from '@nestjs/common';
import { ConsultationEntity } from './entities/consultation.entity';
import { CreateConsultationDto } from './dto/consultation.dto';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';
import { UserEntity } from 'src/user/entities/user.entity';
import { Request } from 'express';
import { MedecinGuard } from './guards/medecin.guard';


@Controller('consultation')
export class ConsultationController {
    constructor(private readonly consultationService:ConsultationService) {}
    @Get('/admin')
    async findAll(): Promise<ConsultationEntity[]> {
      return this.consultationService.findAll();
    }
//modified
    @Get()
    @UseGuards(JwtAuthGuard,MedecinGuard)
    async findAllByMed( @Req() request) {
      const user:UserEntity = request.user; 
      return this.consultationService.findAllByMedecin(user);
    }
    
    @Post()
    async create(@Body() doctorData: CreateConsultationDto):Promise<ConsultationEntity> {
      return this.consultationService.create(doctorData);
    }

    @Get('/admin/:id')
    async findOne(@Param('id') id: string): Promise<ConsultationEntity> {
      return this.consultationService.findOne(id);
    }
 
    @Delete('/admin/:id')
    async delete(@Param('id') id: string): Promise<void> {
       this.consultationService.remove(id);
    }
}
