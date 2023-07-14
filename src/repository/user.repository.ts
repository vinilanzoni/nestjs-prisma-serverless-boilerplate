import { Injectable } from '@nestjs/common';
import { PrismaService } from '../service/prisma.service';
import { Prisma, User } from '@prisma/client';

@Injectable()
export class UserRepository {
  constructor(private prisma: PrismaService) {}

  async createUser(data: Prisma.UserCreateInput): Promise<User> {
    return await this.prisma.user.create({ data });
  }

  async findUsers(): Promise<User[]> {
    return await this.prisma.user.findMany();
  }

  async getUser(id: string): Promise<User> {
    return await this.prisma.user.findFirst({
      where: {
        id,
      },
    });
  }

  async updateUser(id: string, data: Prisma.UserUpdateInput): Promise<User> {
    return await this.prisma.user.update({
      where: {
        id,
      },
      data,
    });
  }

  async deleteUser(id: string): Promise<User> {
    return await this.prisma.user.delete({
      where: {
        id,
      },
    });
  }
}
