import { ConsultationService } from './consultation.service';
import { Controller, Get, Param,Post ,Body ,Delete, UseGuards, Req, Query,Patch} from '@nestjs/common';
import { ConsultationEntity } from './entities/consultation.entity';
import { CreateConsultationDto } from './dto/create-consultation.dto';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';
import { UserEntity } from 'src/user/entities/user.entity';
import { MedecinAdminGuard } from '../common-module/guards/medecin-admin.guard';
import { MedecinGuard } from '../common-module/guards/medecin.guard';
import { AdminGuard } from '../common-module/guards/admin.guard';
import { UpdateConsultationDto } from './dto/update-consultation.dto';


@UseGuards(JwtAuthGuard)
@Controller('consultation')
export class ConsultationController {
    constructor(private readonly consultationService:ConsultationService) {

    }
    
    @Get('/admin')
    @UseGuards(AdminGuard)
    async findAll(): Promise<ConsultationEntity[]> {
      return this.consultationService.findAll();
    }

    @Get()
    @UseGuards(MedecinAdminGuard)
    async findAllByMed( @Req() request , @Query('id') id? : string) {
      const user:UserEntity = request.user; 
      if (user.role ==="medecin")
      return this.consultationService.findAllByMedecin(user);
    else {
      return this.consultationService.findAllByMedecin(user,id);
    }
    }
    @Get('/patient')
    async findAllByPatient( @Req() request) {
      const user:UserEntity = request.user; 
      return this.consultationService.findAllByPatient(user);
    }

    @Get('/patient/:cin')
    @UseGuards(MedecinAdminGuard)
    async findAllByPatientAndMed( @Req() request , @Param('cin') cin: string) {
      const user:UserEntity = request.user; 
      return this.consultationService.findAllByPatientAndMed(user,cin);
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
      return this.consultationService.findConsultationById(id);
    }
 
    @Delete('/admin/:id')
    @UseGuards(AdminGuard)
    async delete(@Param('id') id: string): Promise<void> {
       this.consultationService.remove(id);
    }

    @Patch('/admin/:id')
    @UseGuards(AdminGuard)
    async modify(@Param('id') id: string, @Body() consultation : UpdateConsultationDto ): Promise<void> {
       this.consultationService.modifierConsultation(id,consultation);
   }
}
