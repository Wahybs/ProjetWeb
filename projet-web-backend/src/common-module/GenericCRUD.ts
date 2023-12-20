import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { HasIdInterface } from './id-interface';

@Injectable()
export class CrudService<Entity extends HasIdInterface> {
  constructor(private repository: Repository<Entity>) {}
  create(entity) : Promise<Entity>{
    return this.repository.save(entity);
  }

  findAll(): Promise<Entity[]> {
    return this.repository.find();
  }

  findOne(id) : Promise<Entity>{
    return this.repository.findOne({ where: { id } });
  }

  remove(id) {
     return this.repository.delete(id);
    }
    
}