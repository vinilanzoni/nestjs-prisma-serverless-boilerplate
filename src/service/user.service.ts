import { Injectable } from '@nestjs/common';
import { UserRepository } from '../repository/user.repository';
import { UserCreateDto, UserUpdateDto } from '../dto/user.dto';

@Injectable()
export class UserService {
  constructor(private readonly userRepository: UserRepository) {}

  async createUser(data: UserCreateDto) {
    return await this.userRepository.createUser(data);
  }

  async findUsers() {
    return await this.userRepository.findUsers();
  }

  async getUser(id: string) {
    return await this.userRepository.getUser(id);
  }

  async deleteUser(id: string) {
    return await this.userRepository.deleteUser(id);
  }

  async updateUser(id: string, data: UserUpdateDto) {
    return await this.userRepository.updateUser(id, data);
  }
}
