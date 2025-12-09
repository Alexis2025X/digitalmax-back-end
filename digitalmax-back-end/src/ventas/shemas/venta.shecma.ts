import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { productVenta } from './producto.venta.shema';
import { pagoVenta } from './data.pago.venta';
@Schema({
  timestamps: true,
})
export class venta {
  @Prop({
    required: true,
    trim: true,
  })
  idUser: string;
  @Prop({
    required: true,
  })
  nombre: string;
  @Prop({
    required: true,
  })
  correo: string;
  @Prop({
    required: true,
  })
  telefono: string;

    @Prop({
    required: true,
  })
  tipoVenta: string;

  @Prop({ type: [productVenta] })
  dataventa: productVenta[];

  @Prop({type: [pagoVenta]})
  dataPago: pagoVenta[];
  @Prop({
    required: true,
  })
  totalVenta: number;


}

export const ventaShecma = SchemaFactory.createForClass(venta);
