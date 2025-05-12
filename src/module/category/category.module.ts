import { TypeOrmModule } from '@nestjs/typeorm';
import { CategoryController } from './category.controller';
import { CategoryService } from './category.service';
import { Module } from '@nestjs/common';
import { Category } from './category.entity';
import { Moto } from '../motos/moto.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Category,Moto])],
  providers: [CategoryService],
  controllers: [CategoryController],
  exports: [CategoryService]
})
export class CategoryModule { }