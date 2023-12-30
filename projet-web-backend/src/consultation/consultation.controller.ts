import { ConsultationService } from './consultation.service';
import { Controller, Get, Param,Post ,Body ,Delete, UseGuards, Req} from '@nestjs/common';
import { ConsultationEntity } from './entities/consultation.entity';
import { CreateConsultationDto } from './dto/consultation.dto';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';
import { UserEntity } from 'src/user/entities/user.entity';
import { Request } from 'express';
import { MedecinAdminGuard } from './guards/medecin-admin.guard';
import { MedecinGuard } from './guards/medecin.guard';
import { AdminGuard } from './guards/admin.guard';

@UseGuards(JwtAuthGuard)
@Controller('consultation')
export class ConsultationController {
    constructor(private readonly consultationService:ConsultationService) {}
    @Get('/admin')
    async findAll(): Promise<ConsultationEntity[]> {
      return this.consultationService.findAll();
    }

    @Get()
    @UseGuards(MedecinAdminGuard)
    async findAllByMed( @Req() request) {
      const user:UserEntity = request.user; 
      return this.consultationService.findAllByMedecin(user);
    }
    
    @Post()
    @UseGuards(MedecinGuard)
    async create(@Body() doctorData: CreateConsultationDto, @Req() request):Promise<ConsultationEntity> {
      const user:UserEntity = request.user;
      return this.consultationService.createConsultation(user,doctorData);
    }

    @Get('/admin/:id')
    @UseGuards(AdminGuard)
    async findOne(@Param('id') id: string): Promise<ConsultationEntity> {
      return this.consultationService.findOne(id);
    }
 
    @Delete('/admin/:id')
    @UseGuards(AdminGuard)
    async delete(@Param('id') id: string): Promise<void> {
       this.consultationService.remove(id);
    }
}
