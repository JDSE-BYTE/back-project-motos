import { Module } from '@nestjs/common';
import { MotosService } from './motos.service';
import { MotosController } from './motos.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Moto } from './moto.entity';
import { Category } from '../category/category.entity';
import { Usuario } from '../usuario/user.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Moto, Category, Usuario])],
  controllers: [MotosController],
  providers: [MotosService],
  exports: [MotosService]
})
export class MotosModule { }
