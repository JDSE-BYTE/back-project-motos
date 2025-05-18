import { Injectable } from '@nestjs/common';
import { CreateCarritoDto } from './dto/create-carrito.dto';
import { UpdateCarritoDto } from './dto/update-carrito.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { In, Repository } from 'typeorm';
import { Carrito } from './carrito.entity';
import { Usuario } from '../usuario/user.entity';
import { Moto } from '../motos/moto.entity';

@Injectable()
export class CarritoService {

  constructor(
    @InjectRepository(Carrito) private carritoRepository: Repository<Carrito>,
    @InjectRepository(Usuario) private userRepository: Repository<Usuario>,
    @InjectRepository(Moto) private motoRepository: Repository<Moto>,
  ) { }

  async create(CreateCarritoDto: CreateCarritoDto) {
    const { usuarioId, motoIds } = CreateCarritoDto;
    const usuario = await this.userRepository.findOne({ where: { id: usuarioId } });
    const motos = await this.motoRepository.find({ where: { id: In(motoIds) } });
    const carrito = new Carrito();
    carrito.usuario = usuario;
    carrito.motos = motos;
    return this.carritoRepository.save(carrito);
  }


  async findByUsuario(id: number) {
    return this.carritoRepository.findOne({ where: { usuario: { id } } });
  }

  async update(id: number, updateCarritoDto: UpdateCarritoDto) {
    const { motoIds } = updateCarritoDto;
    const motos = await this.motoRepository.find({ where: { id: In(motoIds) } });
    const carrito = await this.carritoRepository.findOne({ where: { id } });
    carrito.motos = motos;
    return this.carritoRepository.save(carrito);
  }
}
