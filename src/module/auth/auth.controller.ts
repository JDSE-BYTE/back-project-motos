import { Controller, Post, Body, UnauthorizedException, UseGuards, Req } from '@nestjs/common';
import { AuthService } from './auth.service';
import { ApiTags, ApiOperation, ApiResponse, ApiBody } from '@nestjs/swagger';
import { LoginDto } from './dto/login.dto'
import { JwtAuthGuard } from './strategies/jwt-auth.guard';
import { JwtPayload } from './model/jwt-payload.interface';

@ApiTags('auth')
@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) { }

  @Post('login')
  @ApiOperation({ summary: 'Iniciar sesión y obtener un JWT' })
  @ApiResponse({ status: 201, description: 'Token JWT devuelto' })
  async login(@Body() body: LoginDto) {
    const user = await this.authService.validateUser(body.email, body.password);
    if (!user) {
      throw new UnauthorizedException('Credenciales inválidas');
    }
    return this.authService.login(user);
  }


  @Post('validate-user')
  @ApiBody({
    schema: {
      type: 'object',
      properties: {
        correo: {
          type: 'string',
          example: 'usuario@dominio.com',
        },
      },
      required: ['correo'],
    },
  })
  @ApiOperation({ summary: 'Enviar un token de reseteo de contraseña' })
  async sendResetPassword(@Body() body: { correo: string }) {
    return this.authService.sendResetPassword(body.correo);
  }

  @UseGuards(JwtAuthGuard)
  @Post('reset-password')
  @ApiBody({
    schema: {
      type: 'object',
      properties: {
        password: {
          type: 'string',
          example: 'nuevaContraseña',
        },
      },
      required: ['password'],
    },
  })
  @ApiOperation({ summary: 'Restablecer contraseña' })
  async resetPassword(@Req() req: Request & { user: JwtPayload }, @Body() body: { password: string }) {
    const correo = req.user.correo
    return this.authService.resetPassword(correo, body.password);
  }
}
