import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
} from '@nestjs/common';
import { CarritoService } from './carrito.service';
import { CreateCarritoDto } from './dto/create-carrito.dto';
import { UpdateCarritoDto } from './dto/update-carrito.dto';
import { ApiTags, ApiOperation, ApiParam } from '@nestjs/swagger';

@ApiTags('Carrito')
@Controller('carrito')
export class CarritoController {
  constructor(private readonly carritoService: CarritoService) { }

  @Post()
  @ApiOperation({ summary: 'Crear un nuevo carrito de compras' })
  create(@Body() createCarritoDto: CreateCarritoDto) {
    return this.carritoService.create(createCarritoDto);
  }

  @Get(':id')
  @ApiOperation({ summary: 'Obtener carrito por ID de usuario' })
  @ApiParam({ name: 'id', type: Number, description: 'ID del usuario' })
  findOne(@Param('id') id: string) {
    return this.carritoService.findByUsuario(+id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Actualizar carrito por ID' })
  @ApiParam({ name: 'id', type: Number, description: 'ID del carrito' })
  update(@Param('id') id: string, @Body() updateCarritoDto: UpdateCarritoDto) {
    return this.carritoService.update(+id, updateCarritoDto);
  }
}
