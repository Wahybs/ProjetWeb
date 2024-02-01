
import { AbsEntity } from "src/common-module/absEntity.entity";
import { ConsultationEntity } from "src/consultation/entities/consultation.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity("medecin")
export class MedecinEntity extends AbsEntity {
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
    specialite: string;
    @Column({type:"varchar"})
     
    path: string ;

    @OneToMany(type => ConsultationEntity, Consultation => Consultation.medecin, {eager: true})
    consultation: ConsultationEntity[]
    
    
   
}