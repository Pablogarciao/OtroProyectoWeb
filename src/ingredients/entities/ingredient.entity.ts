import { Column, Entity, PrimaryColumn, PrimaryGeneratedColumn, OneToMany } from "typeorm";
import { Image } from "../../images/entities/image.entity";

@Entity()
export class Ingredient {
    @PrimaryGeneratedColumn('uuid')
    id:string;

    @Column('text',
        {
            unique:true
        }
    )
    name:string

    @OneToMany(
        () => Image,
        (image) => image.ingredient,{
            cascade: true,
            eager: true
        }
    )
    images?: Image[];
}
