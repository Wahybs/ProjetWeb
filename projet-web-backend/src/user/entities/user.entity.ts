import { AbsEntity } from "src/common-module/absEntity.entity";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { UserRoleEnum } from "../enum/user-role.enum";


@Entity("user")
export class UserEntity extends AbsEntity {
    @PrimaryGeneratedColumn('uuid')
    id: string;
    @Column({
        type: "varchar",
        unique:true
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


