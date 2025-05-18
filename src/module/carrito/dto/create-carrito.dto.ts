import { IsArray, IsInt, IsOptional } from 'class-validator';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class CreateCarritoDto {
  @ApiPropertyOptional({
    description: 'ID del usuario al que se asociará el carrito',
    example: 1,
  })
  @IsOptional()
  @IsInt()
  usuarioId?: number;

  @ApiProperty({
    description: 'Lista de IDs de las motos que se incluirán en el carrito',
    example: [1, 2, 3],
    type: [Number],
  })
  @IsArray()
  @IsInt({ each: true })
  motoIds: number[];
}
