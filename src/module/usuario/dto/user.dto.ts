import { IsEmail, IsEnum, IsNotEmpty, IsString, MinLength } from 'class-validator';
import { Rol } from 'src/common/enum/rol.enum';
import { ApiProperty } from '@nestjs/swagger';

export class UserDto {
  @ApiProperty({ example: 'Juan', description: 'Nombre del usuario' })
  @IsNotEmpty()
  @IsString()
  nombre: string;

  @ApiProperty({ example: 'Pérez', description: 'Apellido del usuario' })
  @IsNotEmpty()
  @IsString()
  apellido: string;

  @ApiProperty({ example: '30', description: 'Edad del usuario' })
  @IsNotEmpty()
  @IsString()
  edad: string;

  @ApiProperty({ example: '3111234567', description: 'Número de teléfono' })
  @IsNotEmpty()
  @IsString()
  telefono: string;

  @ApiProperty({ example: 'correo@ejemplo.com', description: 'Correo electrónico del usuario' })
  @IsNotEmpty()
  @IsEmail()
  correo: string;

  @ApiProperty({ example: '123456', description: 'Contraseña (mínimo 6 caracteres)' })
  @IsNotEmpty()
  @MinLength(6)
  contraseña: string;

  @ApiProperty({ example: 'Calle Falsa 123', description: 'Dirección del usuario' })
  @IsNotEmpty()
  @IsString()
  direccion: string;

  @ApiProperty({ enum: Rol, description: 'Rol del usuario' })
  @IsEnum(Rol)
  rol: Rol;
}
