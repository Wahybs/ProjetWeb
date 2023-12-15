import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MedicamentEntity } from './entities/medicamanet.entity';

@Module({
    imports: [TypeOrmModule.forFeature(
        [ MedicamentEntity]
      )]
})
export class MedicamentModule {}
