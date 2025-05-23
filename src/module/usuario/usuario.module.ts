import { Module } from '@nestjs/common';
import { UsuarioService } from './usuario.service';
import { UsuarioController } from './usuario.controller';
import { TypeOrmModule } from '@nestjs/typeorm'
import { Usuario } from './user.entity';
import { Moto } from '../motos/moto.entity';
import { Carrito } from '../carrito/carrito.entity';


@Module({
  imports: [TypeOrmModule.forFeature([Usuario, Moto, Carrito])],
  providers: [UsuarioService],
  controllers: [UsuarioController],
  exports: [UsuarioService]
})
export class UsuarioModule { }
