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
  cantidadSelect: number

}