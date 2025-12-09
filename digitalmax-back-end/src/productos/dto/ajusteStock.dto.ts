import { IsNumber,IsNotEmpty } from "Class-validator";

export class actualizarStockDTO{
        @IsNumber()
        @IsNotEmpty()
        cantidadSelect: number;
}