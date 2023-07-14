import { IsEmail, IsNotEmpty, IsOptional } from 'class-validator';

export class UserCreateDto {
  @IsNotEmpty()
  @IsEmail()
  email: string;

  @IsNotEmpty()
  name: string;
}

export class UserUpdateDto {
  @IsOptional()
  @IsEmail()
  email: string;

  @IsOptional()
  name: string;
}
