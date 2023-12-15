import { Controller, Get, Param,Post ,Body , Put,Delete} from '@nestjs/common';
import { MedecinService } from './medecin.service';
import { MedecinEntity } from './entities/medecin.entity';
import { CreateMedecinDto } from './dto/create-medecin.dto';

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
