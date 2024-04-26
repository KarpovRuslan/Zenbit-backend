import {
  Body,
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Post,
  UseGuards,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { SignInDto } from './dto/auth.dto';
import { AuthGuard } from './auth.guard';
import { Public } from 'src/public/public.decorator';
import { Roles } from './decorators/roles.decorators';
import { Role } from './enum/role.enum';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @HttpCode(HttpStatus.OK)
  @Post('login')
  signIn(@Body() signInDto: SignInDto) {
    return this.authService.signIn(signInDto.name, signInDto.password);
  }

  @UseGuards(AuthGuard)
  @Public()
  @Roles(Role.Admin)
  @Get('test')
  test() {
    return { user: 'name 1' };
  }
}
