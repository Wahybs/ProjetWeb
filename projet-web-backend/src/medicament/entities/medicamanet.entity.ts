import { AbsEntity } from "src/common-module/absEntity.entity";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";


@Entity("medicament")
export class MedicamentEntity extends AbsEntity{
  @PrimaryGeneratedColumn('uuid')
  id: string;
  @Column({
    type: "varchar"
})
  name: string; 
  
}
