import { Module } from '@nestjs/common';
import { VentasService } from './ventas.service';
import { VentasController } from './ventas.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { ventaShecma,venta } from './shemas/venta.shecma';

@Module({
    imports: [
      MongooseModule.forFeature([
      {
        name: venta.name,
        schema: ventaShecma
      }
        
    ]),
    
    ],
    controllers: [VentasController],
    providers: [VentasService],
})
export class ventaModule {}
