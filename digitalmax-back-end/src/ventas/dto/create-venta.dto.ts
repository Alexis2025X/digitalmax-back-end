import {IsString, IsOptional,IsNotEmpty, IsNumber } from 'Class-validator'
import { Type } from 'class-transformer';
import { ValidateNested } from 'class-validator';


export class CreateDataProductoDTO{
        @IsNumber()
        @IsNotEmpty()
        cantidadSelect: number;
        @IsNotEmpty()
        @IsNumber()            
        descuento: number;
         @IsNotEmpty()
        @IsString()            
        idProducto: string;
         @IsNotEmpty()
        @IsString()            
        nombre: string;
         @IsNotEmpty()
        @IsNumber()            
        total: number;
}
export class createDataPagoDTO{
        @IsOptional()
        @IsString()            
        Ntarjeta: string;
        @IsOptional()
        @IsString()            
        NombreTarjeta: string;
         @IsOptional()
        @IsString()            
        fechaExpiracion: string;
         @IsOptional()
        @IsString()            
        CVV_CVC: string;
}
export class CreateVentaDto {
        @IsNotEmpty()
        @IsString() 
        idUser: string;
        @IsString()
        @IsNotEmpty()
        nombre: string;
        @IsString()
        @IsNotEmpty()
        correo: string;
        @IsString()
        @IsNotEmpty()
        telefono:string;
         @IsString()
        @IsNotEmpty()
        tipoVenta:string;
       
        
        @ValidateNested()
        @Type(() => createDataPagoDTO)
        dataPago: createDataPagoDTO

         @ValidateNested()
        @Type(() => CreateDataProductoDTO)
        dataventa: CreateDataProductoDTO

        @IsNumber()
        @IsNotEmpty()
        totalVenta:number;
    }
