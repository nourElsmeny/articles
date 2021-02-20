import { Body, Controller, Post, Req, UsePipes, ValidationPipe } from '@nestjs/common';
import { LoginDto, LogoutDto, SignupDto, UserExistDto } from './dto/user.dto';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
    constructor(private userService:UserService){
    }
    @Post("/signup")
    @UsePipes(ValidationPipe)
    async signup(@Body() signupdto: SignupDto): Promise<any> {
      return await this.userService.signup(signupdto)
    }

    @Post('/exist')
    @UsePipes(ValidationPipe)
    async userExist(@Body() signupdto: UserExistDto): Promise<any> {
      return await this.userService.userExist(signupdto)
    }

    @Post("/login")
    @UsePipes(ValidationPipe)
    async login(@Body() logindto: LoginDto):Promise<any>{
        return await this.userService.login(logindto)
      }

    @Post("/logout")
    @UsePipes(ValidationPipe)
    async logout(@Req() req, @Body() logoutdto: LogoutDto):Promise<any>{
        return await this.userService.logout(req, logoutdto)
      }


}
