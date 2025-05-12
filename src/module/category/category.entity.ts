
// import { publicaciones } from 'src/publicaciones/publicaciones.entity'
import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm'
import { Moto } from '../motos/moto.entity'
// import { Departamento } from '../departamento/departamento.entity' OneToOne, JoinColumn, OneToMany 


@Entity({ name: 'marca' })
export class Category {

  @PrimaryGeneratedColumn()
  id: number

  @Column()
  nombre: string

  @Column()
  image: string

  @Column()
  description: string

  @OneToMany(() => Moto, (moto) => moto.marca, { eager: true })
  motos: Moto[];

}



