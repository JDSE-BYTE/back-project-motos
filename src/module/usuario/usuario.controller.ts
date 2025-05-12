import {
    Controller,
    Body,
    Delete,
    Get,
    Param,
    Patch,
    Post,
    UseGuards,
} from '@nestjs/common';
import { UserDto } from './dto/user.dto';
import { UsuarioService } from './usuario.service';
import { ApiTags, ApiBearerAuth, ApiOperation } from '@nestjs/swagger';
import { JwtAuthGuard } from '../auth/strategies/jwt-auth.guard';

@ApiTags('Usuarios')
@ApiBearerAuth()
@Controller('usuario')
export class UsuarioController {
    constructor(private usuarioService: UsuarioService) { }

    @Post()
    @ApiOperation({ summary: 'Crear un nuevo usuario' })
    crearUsuario(@Body() user: UserDto) {
        return this.usuarioService.addUser(user);
    }

    @UseGuards(JwtAuthGuard)
    @Get()
    @ApiOperation({ summary: 'Obtener todos los usuarios' })
    obternerUsuarios() {
        return this.usuarioService.getUsers();
    }

    @UseGuards(JwtAuthGuard)
    @Get(':id')
    @ApiOperation({ summary: 'Obtener usuario por ID' })
    obternerUsuarioPorId(@Param('id') id: string) {
        return this.usuarioService.getUserById(Number(id));
    }

    @UseGuards(JwtAuthGuard)
    @Delete(':id')
    @ApiOperation({ summary: 'Eliminar usuario por ID' })
    eliminarUsuario(@Param('id') id: string) {
        return this.usuarioService.deleteUser(Number(id));
    }

    @UseGuards(JwtAuthGuard)
    @Patch(':id')
    @ApiOperation({ summary: 'Actualizar usuario por ID' })
    actualizarUsuario(@Param('id') id: string, @Body() user: UserDto) {
        return this.usuarioService.updateUser(Number(id), user);
    }
}
