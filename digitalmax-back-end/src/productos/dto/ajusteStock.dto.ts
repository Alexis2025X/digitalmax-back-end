import { IsNumber, IsNotEmpty } from 'class-validator';

export class actualizarStockDTO {
  @IsNumber()
  @IsNotEmpty()
  cantidadSelect: number;
}
