import { IsEmail, IsNotEmpty, IsString, IsUrl } from "class-validator";

export class RegisterDto {
  @IsString()
  @IsNotEmpty()
  readonly username: string;

  @IsString()
  @IsNotEmpty()
  readonly firstname: string;

  @IsString()
  @IsNotEmpty()
  readonly lastname: string;

  @IsNotEmpty()
  @IsEmail()
  readonly email: string;

  @IsNotEmpty()
  @IsString()
  readonly password: string;

  constructor(d: RegisterDto) {
    this.username = d.username;
    this.firstname = d.firstname;
    this.lastname = d.lastname;
    this.email = d.email;
    this.password = d.password;
  }
}

export class LoginDto {
  @IsNotEmpty()
  readonly email: string;

  @IsNotEmpty()
  readonly password: string;

  constructor(d: LoginDto) {
    this.email = d.email;
    this.password = d.password;
  }
}

export class UpdateAvatarDto {
  @IsNotEmpty()
  @IsUrl()
  readonly avatar: string;

  constructor(d: UpdateAvatarDto) {
    this.avatar = d.avatar;
  }
}

export class UserResponseDto {
  id: number;
  username: string;
  firstname: string;
  lastname: string;
  email: string;
  avatar: string;

  constructor(user: UserResponseDto) {
    this.id = user.id;
    this.username = user.username;
    this.firstname = user.firstname;
    this.lastname = user.lastname;
    this.email = user.email;
    this.avatar = user.avatar;
  }
}
