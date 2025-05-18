
import { Entity, Column, PrimaryGeneratedColumn, OneToMany, OneToOne, JoinColumn } from 'typeorm'
import { Rol } from '../../common/enum/rol.enum'
import { Moto } from '../motos/moto.entity'
import { Carrito } from '../carrito/carrito.entity'


@Entity({ name: 'user' })
export class Usuario {

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    nombre: string

    @Column()
    apellido: string

    @Column()
    edad: string

    @Column()
    telefono: string

    @Column()
    correo: string

    @Column()
    contraseña: string

    @Column()
    direccion: string

    @Column()
    rol: Rol

    @OneToMany(() => Moto, (moto) => moto.usuario, { eager: true })
    motos: Moto[];

    @OneToOne(() => Carrito, carrito => carrito.usuario, { cascade: true, eager: true })
    @JoinColumn()
    carrito: Carrito;
}



