import { AbsEntity } from "src/common-module/absEntity.entity";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

export enum UserRoleEnum {
    admin = 'admin',
    medecin = 'medecin',
    patient= 'patient'
  }
@Entity("user")
export class UserEntity extends AbsEntity {
    @PrimaryGeneratedColumn('uuid')
    id: string;
    @Column({
        type: "varchar"
    })
    email: string;

    @Column({
        type: "varchar"
    })
    password: string;

    @Column({
        type: "varchar"
    })
    hash: string;
    @Column({
        type: 'enum',
        enum: UserRoleEnum,
        
      })
      role: UserRoleEnum;

}
