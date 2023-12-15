
import { AbsEntity } from "src/common-module/absEntity.entity";
import { MedecinEntity } from "src/medecin/entities/medecin.entity";
import { PatientEntity } from "src/patient/entities/patient.entity";
import { PrescriptiponEntity } from "src/prescription/entities/prescription.entity";
import { Column, Entity, JoinColumn, ManyToOne, OneToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity("consultation")
export class ConsultationEntity extends AbsEntity{
    @PrimaryGeneratedColumn('uuid')
    id: string;
    @Column({
        type: "date"
    })
    date: Date;

    @Column({
        type: "varchar"
    })
    diagnostic: string;
  
    @ManyToOne(
        () => PatientEntity,
        (patient) => patient.consultations,
        {
          cascade: ['insert', 'update'],
        }
    )
    patient: PatientEntity;

    @OneToOne(() => PrescriptiponEntity, prescription => prescription.consultation ,{eager:true})
    @JoinColumn()
    prescription: PrescriptiponEntity;

    @ManyToOne(
        () => MedecinEntity,
        (medecin) => medecin.consultation,
        {
          cascade: ['insert', 'update'],
        }
        )
    medecin: MedecinEntity;
}