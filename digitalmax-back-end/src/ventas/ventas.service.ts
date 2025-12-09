import { Injectable } from '@nestjs/common';
import { CreateVentaDto } from './dto/create-venta.dto';
import { UpdateVentaDto } from './dto/update-venta.dto';
import { venta } from './shemas/venta.shecma';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { hash, compare } from 'bcrypt';
import { HttpException, HttpStatus, Res } from '@nestjs/common';
import { Request, response, Response } from 'express';
@Injectable()
export class VentasService {
  constructor(
    @InjectModel(venta.name) private ventaModel: Model<venta>,
  ) {}

  async create(createVentaDto: CreateVentaDto) {
    try {
      this.ventaModel.create();

      const dataPago = createVentaDto?.dataPago



      const datapagoHash = {
        Ntarjeta: await hash(dataPago[0].Ntarjeta.toString(), 10),
        NombreTarjeta: await hash(dataPago[0].NombreTarjeta, 10),
        fechaExpiracion: await hash(dataPago[0].fechaExpiracion, 10),
        CVV_CVC:  await hash(dataPago[0].CVV_CVC.toString(), 10),
      }
      createVentaDto = {...createVentaDto, dataPago: datapagoHash}
   

       const newUser = new this.ventaModel(createVentaDto);
       newUser.save();
       return response.status(201) 
    } catch (error) {
      console.log(error)
      const res = response;
      return res.status(409);
    }
  }

  findAll() {
    return this.ventaModel.find();
  }

  findOne(id: number) {
    return `This action returns a #${id} venta`;
  }

  update(id: number, updateVentaDto: UpdateVentaDto) {
    return `This action updates a #${id} venta`;
  }

  remove(id: number) {
    return `This action removes a #${id} venta`;
  }
}
