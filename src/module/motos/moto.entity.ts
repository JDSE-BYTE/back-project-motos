import { TipoMotor } from "../../common/enum/tipo-motor";
import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";
import { Usuario } from "../usuario/user.entity";
import { ECombustible } from "../../common/enum/combustible.enum";
import { ETransmision } from "../../common/enum/trasmision.enum";
import { Carrito } from "../carrito/carrito.entity";
import { Category } from "../category/category.entity";

@Entity({ name: 'moto' })
export class Moto {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  modelo: string;

  @Column()
  tipo_motor: TipoMotor;

  @Column()
  cilindraje: string;

  @Column()
  color: string;

  @Column()
  año: string;

  @Column()
  precio: string;

  @Column()
  descripcion: string;

  @Column()
  images: string;

  @Column()
  kilometraje: string;

  @Column()
  combustible: ECombustible;

  @Column()
  transmision: ETransmision;

  @Column()
  peso: string;

  @Column()
  potencia: string;

  @Column({ default: true })
  disponible: boolean;

  @ManyToOne(() => Category, (category) => category.motos)
  @JoinColumn({ name: 'marca_id' })
  marca: Category;

  @ManyToOne(() => Usuario, (usuario) => usuario.motos)
  @JoinColumn({ name: 'usuario_id' })
  usuario: Usuario;


  @ManyToOne(() => Carrito, carrito => carrito.motos)
  carrito: Carrito;

  @CreateDateColumn()
  fecha_creacion: Date;

  @UpdateDateColumn()
  fecha_actualizacion: Date;

}
