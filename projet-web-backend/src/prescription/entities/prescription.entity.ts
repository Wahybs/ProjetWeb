import { AbsEntity } from "src/common-module/absEntity.entity";
import { ConsultationEntity } from "src/consultation/entities/consultation.entity";
import { Column, Entity,   OneToOne,   PrimaryGeneratedColumn } from "typeorm";

@Entity("prescription")
export class PrescriptionEntity extends AbsEntity {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column("json")
    medicaments: { nom: string; dosage: string }[];
    @OneToOne(() => ConsultationEntity, consultation => consultation.prescription)
          consultation: ConsultationEntity;
  

    
}