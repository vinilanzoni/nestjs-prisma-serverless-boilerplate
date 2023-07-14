import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseUUIDPipe,
  Patch,
  Post,
} from '@nestjs/common';
import { UserService } from '../service/user.service';
import { UserCreateDto, UserUpdateDto } from '../dto/user.dto';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post('')
  async create(@Body() data: UserCreateDto) {
    return await this.userService.createUser(data);
  }

  @Delete(':id')
  async delete(@Param('id', ParseUUIDPipe) id: string) {
    return await this.userService.deleteUser(id);
  }

  @Get('')
  async find() {
    return await this.userService.findUsers();
  }

  @Get(':id')
  async get(@Param('id', ParseUUIDPipe) id: string) {
    return await this.userService.getUser(id);
  }

  @Patch(':id')
  async update(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() data: UserUpdateDto,
  ) {
    return await this.userService.updateUser(id, data);
  }
}
