import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { UserDto } from './Dto/response/user.Dto';
import { DeleteResult, UpdateResult } from 'typeorm';

@Controller('users')
export class UsersController {
  constructor(private readonly userService: UsersService) {}

  @Get()
  findAll(): Promise<UserDto[]> {
    return this.userService.findAll();
  }
  @Get(':id')
  getUser(@Param(':id') id: number): Promise<UserDto> {
    return this.userService.findOne(id);
  }

  @Post()
  createOne(@Body() user: UserDto): UserDto {
    return this.userService.createOne(user);
  }

  @Delete(':id')
  deleteOne(@Param(':id') id: number): Promise<DeleteResult> {
    return this.userService.deleteOne(id);
  }

  @Put(':id')
  updateOne(
    @Param(':id') id: number,
    @Body() user: UserDto,
  ): Promise<UpdateResult> {
    return this.userService.updateOne(id, user);
  }
}
