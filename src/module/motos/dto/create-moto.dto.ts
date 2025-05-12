import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsBoolean, IsEnum, IsOptional } from 'class-validator';
import { TipoMotor } from 'src/common/enum/tipo-motor';
import { ECombustible } from 'src/common/enum/combustible.enum';
import { ETransmision } from 'src/common/enum/trasmision.enum';
import { Category } from 'src/module/category/category.entity';
import { Usuario } from 'src/module/usuario/user.entity';

export class CreateMotoDto {

  @ApiProperty({ description: 'Modelo de la moto', type: String, required: false })
  @IsString()
  @IsOptional()
  modelo?: string;

  @ApiProperty({ description: 'Tipo de motor', enum: TipoMotor, required: false })
  @IsEnum(TipoMotor)
  @IsOptional()
  tipo_motor?: TipoMotor;

  @ApiProperty({ description: 'Cilindraje de la moto', type: String, required: false })
  @IsString()
  @IsOptional()
  cilindraje?: string;

  @ApiProperty({ description: 'Color de la moto', type: String, required: false })
  @IsString()
  @IsOptional()
  color?: string;

  @ApiProperty({ description: 'Año de la moto', type: String, required: false })
  @IsString()
  @IsOptional()
  año?: string;

  @ApiProperty({ description: 'Precio de la moto', type: String, required: false })
  @IsString()
  @IsOptional()
  precio?: string;

  @ApiProperty({ description: 'Descripción de la moto', type: String, required: false })
  @IsString()
  @IsOptional()
  descripcion?: string;

  @ApiProperty({ description: 'Imágenes de la moto', type: String, required: false })
  @IsString()
  @IsOptional()
  images?: string;

  @ApiProperty({ description: 'Kilometraje de la moto', type: String, required: false })
  @IsString()
  @IsOptional()
  kilometraje?: string;

  @ApiProperty({ description: 'Tipo de combustible', enum: ECombustible, required: false })
  @IsEnum(ECombustible)
  @IsOptional()
  combustible?: ECombustible;

  @ApiProperty({ description: 'Tipo de transmisión', enum: ETransmision, required: false })
  @IsEnum(ETransmision)
  @IsOptional()
  transmision?: ETransmision;

  @ApiProperty({ description: 'Peso de la moto', type: String, required: false })
  @IsString()
  @IsOptional()
  peso?: string;

  @ApiProperty({ description: 'Potencia de la moto', type: String, required: false })
  @IsString()
  @IsOptional()
  potencia?: string;

  @ApiProperty({ description: 'Disponibilidad de la moto', type: Boolean, default: true, required: false })
  @IsBoolean()
  @IsOptional()
  disponible?: boolean;

  @ApiProperty({ description: 'Categoría de la moto', type: Category, required: false })
  marca?: Category;

  @ApiProperty({ description: 'Usuario que creó la moto', type: Usuario, required: false })
  usuario?: Usuario;
}
