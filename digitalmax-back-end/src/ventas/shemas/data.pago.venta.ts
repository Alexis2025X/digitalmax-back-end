import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
@Schema({
  timestamps: true,
})
export class pagoVenta extends Document {
  @Prop({
    required: true,
    trim: true,
  })
  Ntarjeta: string;
  @Prop({
    required: true,
  })
  NombreTarjeta: string;
  @Prop({
    required: true,
  })
  fechaExpiracion: string;
  @Prop({
    required: true,
  })
  CVV_CVC: string;
}

export const pagoVentaShecma = SchemaFactory.createForClass(pagoVenta);
