import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { MotosService } from './motos.service';
import { CreateMotoDto } from './dto/create-moto.dto';
import { UpdateMotoDto } from './dto/update-moto.dto';
import { ApiTags, ApiOperation, ApiParam, ApiBearerAuth } from '@nestjs/swagger';
import { JwtAuthGuard } from '../auth/strategies/jwt-auth.guard';

@ApiTags('motos')
@ApiBearerAuth()
@UseGuards(JwtAuthGuard)
@Controller('motos')
export class MotosController {
  constructor(private readonly motosService: MotosService) { }

  @Post()
  @ApiOperation({ summary: 'Crear una nueva moto' })
  create(@Body() createMotoDto: CreateMotoDto) {
    return this.motosService.create(createMotoDto);
  }

  @Get()
  @ApiOperation({ summary: 'Obtener todas las motos' })
  findAll() {
    return this.motosService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Obtener una moto por su ID' })
  @ApiParam({ name: 'id', description: 'ID de la moto', type: String })
  findOne(@Param('id') id: string) {
    return this.motosService.findOne(+id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Actualizar una moto existente' })
  @ApiParam({ name: 'id', description: 'ID de la moto', type: String })
  update(@Param('id') id: string, @Body() updateMotoDto: UpdateMotoDto) {
    return this.motosService.update(+id, updateMotoDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Eliminar una moto por su ID' })
  @ApiParam({ name: 'id', description: 'ID de la moto', type: String })
  remove(@Param('id') id: string) {
    return this.motosService.remove(+id);
  }
}
