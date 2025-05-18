import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Moto } from './moto.entity';
import { Repository } from 'typeorm';
import { CreateMotoDto } from './dto/create-moto.dto';
import { UpdateMotoDto } from './dto/update-moto.dto';

@Injectable()
export class MotosService {

  constructor(
    @InjectRepository(Moto) private repository: Repository<Moto>,
  ) { }

  async create(createMotoDto: CreateMotoDto) {
    const moto = new Moto();
    moto.modelo = createMotoDto.modelo;
    moto.tipo_motor = createMotoDto.tipo_motor;
    moto.cilindraje = createMotoDto.cilindraje;
    moto.color = createMotoDto.color;
    moto.año = createMotoDto.año;
    moto.precio = createMotoDto.precio;
    moto.descripcion = createMotoDto.descripcion;
    moto.images = createMotoDto.images;
    moto.kilometraje = createMotoDto.kilometraje;
    moto.combustible = createMotoDto.combustible;
    moto.transmision = createMotoDto.transmision;
    moto.peso = createMotoDto.peso;
    moto.potencia = createMotoDto.potencia;
    moto.disponible = createMotoDto.disponible;
    moto.marca = createMotoDto.marca;
    moto.usuario = createMotoDto.usuario;
    return this.repository.save(moto);
  }

  async findAll() {
    return this.repository.find();
  }

  async findOne(id: number) {
    return await this.repository.findOne({ where: { id } })
  }


  async findByUserId(id: number) {
    return await this.repository.find({ where: { usuario: { id } } })
  }

  async update(id: number, updateMotoDto: UpdateMotoDto) {
    return this.repository.update({ id }, updateMotoDto);
  }

  async remove(id: number) {
    return this.repository.delete({ id });
  }
}
