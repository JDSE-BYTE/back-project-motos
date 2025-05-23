import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UsuarioService } from '../usuario/usuario.service';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsuarioService,
    private jwtService: JwtService,
  ) { }

  async validateUser(email: string, password: string): Promise<any> {
    const user = await this.usersService.findByEmail(email);
    if (user && user.contraseña === password) {
      const result = { ...user };
      delete result.contraseña;
      return result;
    }
    return null;
  }

  async login(user: any) {
    const payload = { username: user.email };
    return {
      access_token: this.jwtService.sign(payload),
      user
    };
  }


  async sendResetPassword(email: string) {
    const user = await this.usersService.findByEmail(email);

    if (!user) {
      return {
        success: false,
        message: 'User not found',
      };
    }

    const token = this.jwtService.sign({ correo: user.correo });

    return {
      token,
      success: true,
      message: 'You can reset your password!',
    };
  }

  async resetPassword(correo: string, newPassword: string) {
    const user = await this.usersService.findByEmail(correo);
    user.contraseña = newPassword;
    return this.usersService.updateUser(user.id, user);
  }

}
