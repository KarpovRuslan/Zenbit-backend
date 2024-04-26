import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from 'src/users/users.service';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private JwtService: JwtService,
  ) {}
  async signIn(name: string, password: string): Promise<any> {
    const user = await this.usersService.findOne(name);
    if (user.password !== password) {
      throw new UnauthorizedException();
    }
    const payload = { name: user.name, sub: user.userId };
    const tokenAccess = await this.JwtService.signAsync(payload, {
      expiresIn: '20m',
    });
    return { token: tokenAccess };
  }
}
