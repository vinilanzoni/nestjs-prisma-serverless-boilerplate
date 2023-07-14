import { UserRepository } from './repository/user.repository';
import { UserService } from './service/user.service';
import { UserController } from './controller/user.controller';
import { Module } from '@nestjs/common';
import { AppController } from './controller/app.controller';
import { AppService } from './service/app.service';
import { PrismaService } from './service/prisma.service';

@Module({
  imports: [],
  controllers: [UserController, AppController],
  providers: [UserRepository, UserService, AppService, PrismaService],
})
export class AppModule {}
