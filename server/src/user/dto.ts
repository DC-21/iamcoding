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
  @IsEmail()
  readonly password: string;

  @IsString()
  @IsNotEmpty()
  readonly phone: string;

  @IsString()
  @IsNotEmpty()
  readonly address: string;

  constructor(d: RegisterDto) {
    this.username = d.username;
    this.firstname = d.firstname;
    this.lastname = d.lastname;
    this.email = d.email;
    this.password = d.password;
    this.phone = d.phone;
    this.address = d.address;
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
