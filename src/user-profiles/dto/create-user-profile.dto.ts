import { IsNotEmpty, IsString, IsEmail } from "class-validator";

export class CreateUserProfileDto {
  @IsNotEmpty()
  @IsString()
  login: string;

  @IsNotEmpty()
  @IsEmail()
  email: string;

  @IsNotEmpty()
  @IsString()
  password: string;
}
