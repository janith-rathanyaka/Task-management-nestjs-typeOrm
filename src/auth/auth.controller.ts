import { Body, Controller, Post, Req, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { User } from './auth.entity';
import { AuthService } from './auth.service';
import { AuthCredentialsDto } from './dto/auth-credentials.dto';
import { GetUser } from './get-user.decorator';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('/signup')
  signUp(@Body() authCredentialsDto: AuthCredentialsDto): Promise<any> {
    return this.authService.signup(authCredentialsDto);
  }

  @Post('/signin')
  login(@Body() authCredentialsDto: AuthCredentialsDto): Promise<any> {
    return this.authService.signIn(authCredentialsDto);
  }

//   @Post('/test')
//   @UseGuards(AuthGuard())
//   test(@GetUser() user: User) {
//    console.log('ddd', user);
//   }
}
