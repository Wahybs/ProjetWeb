import { ConsultationService } from './consultation.service';
import { Controller, Get, Param,Post ,Body , Put,Delete, UseGuards, SetMetadata, Req, Headers} from '@nestjs/common';
import { ConsultationEntity } from './entities/consultation.entity';
import { CreateConsultationDto } from './dto/consultation.dto';
import { RolesGuard } from 'src/common-module/roles.guard';

@Controller('consultation')
export class ConsultationController {
    constructor(private readonly consultationService:ConsultationService) {}
    @Get('/admin')
    async findAll(): Promise<ConsultationEntity[]> {
      return this.consultationService.findAll();
    }

    @Get('medecin/:nom/:prenom')
    @UseGuards(RolesGuard)
    async getAllByMed(
     // @Req() request,
      @Param('nom') nom: string,
      @Param('prenom') prenom: string,
      @Headers('token') token: string,
    ) {
      //const user = request.user; // Récupérez l'utilisateur depuis le contexte de la requête
      return this.consultationService.getAllByMedecin(token, nom, prenom);
    }
  
/*
    @Get('/medecin/:nom/:prenom')
    async getAllByMedecin(
    @Param('nom') nom: string,
    @Param('prenom') prenom: string,) {
    return this.consultationService.findAllByMedecin(nom, prenom);
  }*/
    
    @Post()
    async create(@Body() doctorData: CreateConsultationDto): Promise<ConsultationEntity> {
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
