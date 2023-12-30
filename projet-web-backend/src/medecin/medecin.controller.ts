import { Controller, Get, Param,Post ,Body , Put,Delete, UseGuards} from '@nestjs/common';
import { MedecinService } from './medecin.service';
import { MedecinEntity } from './entities/medecin.entity';
import { CreateMedecinDto } from './dto/create-medecin.dto';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';
import { AdminGuard } from 'src/consultation/guards/admin.guard';

@UseGuards(JwtAuthGuard,AdminGuard)
@Controller('medecin')
export class MedecinController {
    constructor(private readonly MedecinService: MedecinService) {}
    @Get()
    async findAll(): Promise<MedecinEntity[]> {
      return this.MedecinService.findAll();
    }
    @Post()
    async create(@Body() doctorData: CreateMedecinDto): Promise<MedecinEntity> {
      return this.MedecinService.create(doctorData);
    }
    @Get(':id')
    async findOne(@Param('id') id: string): Promise<MedecinEntity> {
      return this.MedecinService.findOne(id);
    }
    @Delete(':id')
    async delete(@Param('id') id: string): Promise<void> {
       this.MedecinService.remove(id);
    }
}
