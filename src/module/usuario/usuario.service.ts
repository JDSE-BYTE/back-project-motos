import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm'
import { Usuario } from './user.entity';
import { Repository } from 'typeorm'
import { UserDto } from './dto/user.dto';

@Injectable()
export class UsuarioService {
    constructor(
        @InjectRepository(Usuario) private userRepository: Repository<Usuario>,
    ) { }

    async addUser(userDto: UserDto) {
        const user = new Usuario()
        user.nombre = userDto.nombre
        user.apellido = userDto.apellido
        user.edad = userDto.edad
        user.telefono = userDto.telefono
        user.correo = userDto.correo
        user.contraseña = userDto.contraseña
        user.direccion = userDto.direccion
        user.rol = userDto.rol
        return this.userRepository.save(user)
    }

    async getUsers() {
        return this.userRepository.find()
    }

    async getUserById(id: number) {
        return this.userRepository.findOne({
            where: { id },
        });
    }

    async deleteUser(id: number) {
        return this.userRepository.delete({ id })
    }

    async updateUser(id: number, updateUserDto: UserDto) {
        const toUpdate = await this.userRepository.findOne({ where: { id } });
        const updated = Object.assign(toUpdate, updateUserDto);
        return await this.userRepository.save(updated);
    }

    async findByEmail(email: string) {
        return this.userRepository.findOne({ where: { correo: email } });
    }
}
