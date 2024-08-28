import { IsObject, IsString, Min, MinLength } from "class-validator";
import { Ingredient } from "src/ingredients/entities/ingredient.entity";

export class CreateImageDto {
    @IsString()
    @MinLength(1)   
    url: string;

    @IsObject()
    ingredient: Ingredient;
}
