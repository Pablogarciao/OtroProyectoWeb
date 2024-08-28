import { Ingredient } from 'src/ingredients/entities/ingredient.entity';
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';

@Entity()
export class Image {
    @PrimaryGeneratedColumn()
    id: string;
    
    @Column('text', { unique: true })
    url: string;
    @ManyToOne(
        () => Ingredient,
        (ingredient) => ingredient.images{
            cascade: true,//si se elimina una, se elimina la otra
            eager: true
        }

    )
    ingredient: Ingredient;
    
}
