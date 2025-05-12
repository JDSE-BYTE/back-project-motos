import { IsNotEmpty, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CategoryDto {
  @ApiProperty({ example: 'Ropa', description: 'Nombre de la categoría' })
  @IsNotEmpty()
  @IsString()
  nombre: string;

  @ApiProperty({ example: 'https://example.com/imagen.jpg', description: 'URL de la imagen representativa' })
  @IsNotEmpty()
  @IsString()
  image: string;

  @ApiProperty({ example: 'Categoría de ropa para hombres y mujeres', description: 'Descripción de la categoría' })
  @IsNotEmpty()
  @IsString()
  description: string;
}
