import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
@Schema({
  timestamps: true,
})
export class productVenta extends Document {
  @Prop({
    required: true,
  })
  cantidadSelect: number;
  @Prop({
    required: true,
  })
  descuento: number;
  @Prop({
    required: true,
  })
  idProducto:string
  @Prop({
    required: true,
  })
  nombre: string;
  @Prop({
    required: true,
  })
  precio: number;
  @Prop({
    required: true,
  })
  total: number;
}

export const productoVentaShecma = SchemaFactory.createForClass(productVenta);
