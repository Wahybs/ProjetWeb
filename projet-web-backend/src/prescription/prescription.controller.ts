import { Controller, Get, Param,Post ,Body , Put,Delete} from '@nestjs/common';
import { PrescriptionService } from './prescription.service';
import { CreatePrescriptionDto } from './dto/create-prescription.dto';
import { PrescriptionEntity } from './entities/prescription.entity';

@Controller('prescription')
export class PrescriptionController {
    constructor(private readonly prescriptonService:PrescriptionService) {}
    @Get()
    async findAll(): Promise<PrescriptionEntity[]> {
      return this.prescriptonService.findAll();
    }
    @Post()
    async create(@Body() doctorData: CreatePrescriptionDto): Promise<PrescriptionEntity> {
      return this.prescriptonService.create(doctorData);
    }
    @Get(':id')
    async findOne(@Param('id') id: string): Promise<PrescriptionEntity> {
      return this.prescriptonService.findOne(id);
    }
    @Delete(':id')
    async delete(@Param('id') id: string): Promise<void> {
       this.prescriptonService.remove(id);
    }
}
