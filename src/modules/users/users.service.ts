import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult, Repository, UpdateResult } from 'typeorm';
import { User } from './models/user.entity';
import { UserDto } from './Dto/response/user.Dto';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
  ) {}

  findAll(): Promise<UserDto[]> {
    return this.usersRepository.find();
  }

  findOne(id: number): Promise<UserDto> {
    return this.usersRepository.findOne(id);
  }

  createOne(user: UserDto): UserDto {
    return this.usersRepository.create();
  }

  deleteOne(id: number): Promise<DeleteResult> {
    return this.usersRepository.delete(id);
  }

  updateOne(id: number, user: UserDto): Promise<UpdateResult> {
    return this.usersRepository.update(id, user);
  }
}
