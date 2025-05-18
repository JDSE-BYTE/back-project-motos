import { CreateDateColumn, Entity, OneToMany, OneToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { Usuario } from "../usuario/user.entity";
import { Moto } from "../motos/moto.entity";

@Entity({ name: 'carrito' })
export class Carrito {

  @PrimaryGeneratedColumn()
  id: number;

  @OneToOne(() => Usuario, usuario => usuario.carrito)
  usuario: Usuario;

  @OneToMany(() => Moto, moto => moto.carrito, { cascade: true, eager: true })
  motos: Moto[];

  @CreateDateColumn()
  fecha_creacion: Date;

  @UpdateDateColumn()
  fecha_actualizacion: Date;
}
