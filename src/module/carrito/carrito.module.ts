import { Module } from '@nestjs/common';
import { CarritoService } from './carrito.service';
import { CarritoController } from './carrito.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Moto } from '../motos/moto.entity';
import { Usuario } from '../usuario/user.entity';
import { Carrito } from './carrito.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Moto, Usuario, Carrito])],
  controllers: [CarritoController],
  providers: [CarritoService],
  exports: [CarritoService]
})
export class CarritoModule { }