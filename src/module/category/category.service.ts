import { Category } from './category.entity';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'
import { CategoryDto } from './dto/category.dto';

@Injectable()
export class CategoryService {
  constructor(
    @InjectRepository(Category) private categoryRepository: Repository<Category>,
  ) { }

  async add(categoryDto: CategoryDto) {
    const category = new Category()
    category.nombre = categoryDto.nombre
    category.image = categoryDto.image
    category.description = categoryDto.description
    return this.categoryRepository.save(category)
  }

  async get() {
    return this.categoryRepository.find()
  }

  async getById(id: number) {
    return this.categoryRepository.findOne({
      where: { id },
    });
  }

  async delete(id: number) {
    return this.categoryRepository.delete({ id })
  }

  async update(id: number, updateDto: CategoryDto) {
    const toUpdate = await this.categoryRepository.findOne({ where: { id } });
    const updated = Object.assign(toUpdate, updateDto);
    return await this.categoryRepository.save(updated);
  }

}
