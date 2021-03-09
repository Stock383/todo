import { Controller, Get } from '@nestjs/common';
import { User } from './models/user.entity';
import { Repository } from 'typeorm';
import { UsersService } from './users.service';
import { UserDto } from './Dto/response/user.Dto';

@Controller('users')
export class UsersController {
  constructor(private readonly userService: UsersService) {}

  @Get()
  getHello(): Promise<UserDto[]> {
    return this.userService.findAll();
  }
}
