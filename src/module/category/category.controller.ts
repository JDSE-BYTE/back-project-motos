import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  UseGuards,
} from '@nestjs/common';
import { CategoryService } from './category.service';
import { CategoryDto } from './dto/category.dto';
import { ApiTags, ApiBearerAuth, ApiOperation } from '@nestjs/swagger';
import { JwtAuthGuard } from '../auth/strategies/jwt-auth.guard';

@ApiTags('Categorías') // Agrupa los endpoints en Swagger
@ApiBearerAuth() // Indica que se usa JWT para autenticación
@UseGuards(JwtAuthGuard) // Protege todos los endpoints del controlador
@Controller('category')
export class CategoryController {
  constructor(private service: CategoryService) { }

  @Post()
  @ApiOperation({ summary: 'Crear una categoría' })
  add(@Body() category: CategoryDto) {
    return this.service.add(category);
  }

  @Get()
  @ApiOperation({ summary: 'Obtener todas las categorías' })
  get() {
    return this.service.get();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Obtener una categoría por ID' })
  getById(@Param('id') id: string) {
    return this.service.getById(Number(id));
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Eliminar una categoría por ID' })
  delete(@Param('id') id: string) {
    return this.service.delete(Number(id));
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Actualizar una categoría por ID' })
  update(@Param('id') id: string, @Body() category: CategoryDto) {
    return this.service.update(Number(id), category);
  }
}
