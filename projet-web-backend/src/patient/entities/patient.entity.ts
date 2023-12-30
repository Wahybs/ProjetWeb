import { AbsEntity } from "src/common-module/absEntity.entity";
import { ConsultationEntity } from "src/consultation/entities/consultation.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity("patient")
export class PatientEntity extends AbsEntity{
    @PrimaryGeneratedColumn('uuid')
    id: string;
    @Column({
        type: "varchar"
    })
    nom: string;

    @Column({
        type: "varchar"
    })
    prenom: string;

    @Column({
        type: "varchar"
    })
    age: string;
    
    @Column({
        unique:true
    })
     
    cin: string ;

    @Column({
        type: "date"
    })
    dateDeNaissance: Date;

    @OneToMany(type => ConsultationEntity, Consultation => Consultation.patient, {eager: true})
    consultations: ConsultationEntity[]
}