import { Column, CreateDateColumn, DeleteDateColumn,  UpdateDateColumn } from 'typeorm';


export class AbsEntity {
@Column()
@CreateDateColumn({update:false}) 
createdAt: Date; 
@UpdateDateColumn()
  updatedAt: Date; 
@DeleteDateColumn()
  deletedAt: Date ;
}