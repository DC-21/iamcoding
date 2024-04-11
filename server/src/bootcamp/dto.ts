import { Category } from "@prisma/client";
import {
  IsBoolean,
  IsDateString,
  IsEnum,
  IsInt,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
  IsUrl,
} from "class-validator";

export class CreateBootCampDto {
  @IsString()
  @IsNotEmpty()
  readonly title: string;

  @IsString()
  @IsNotEmpty()
  readonly description: string;

  @IsEnum(Category)
  readonly category: Category;

  @IsDateString()
  @IsNotEmpty()
  readonly starting: string;

  @IsDateString()
  @IsNotEmpty()
  readonly ending: string;

  @IsNumber()
  @IsNotEmpty()
  readonly duration: number;

  @IsNotEmpty()
  @IsNumber()
  readonly rating?: number;

  @IsNotEmpty()
  @IsString()
  @IsUrl()
  readonly videos?: string;

  @IsNotEmpty()
  @IsNumber()
  readonly authorId?: number;

  constructor(data: CreateBootCampDto) {
    this.title = data.title;
    this.description = data.description;
    this.category = data.category;
    this.starting = data.starting;
    this.ending = data.ending;
    this.duration = data.duration;
    this.videos = data.videos;
    this.authorId = data.authorId;
  }
}

export class FindDto {
  @IsNotEmpty()
  @IsNumber()
  id: number;

  constructor(d: FindDto) {
    this.id = d.id;
  }
}

export class UpdateBootCampDto {
  @IsOptional()
  @IsString()
  readonly title?: string;

  @IsOptional()
  @IsString()
  readonly description?: string;

  @IsOptional()
  @IsEnum(Category)
  readonly category?: Category;

  @IsOptional()
  @IsInt({ each: true })
  readonly registered?: number[];

  @IsOptional()
  @IsDateString()
  readonly starting?: string;

  @IsOptional()
  @IsDateString()
  readonly ending?: string;

  @IsOptional()
  @IsInt()
  readonly duration?: number;

  @IsOptional()
  @IsInt()
  readonly rating?: number;

  @IsOptional()
  @IsString()
  readonly videos?: string;

  @IsOptional()
  @IsInt()
  readonly authorId?: number;

  @IsOptional()
  @IsBoolean()
  readonly completed?: boolean;

  constructor(data: UpdateBootCampDto) {
    this.title = data.title;
    this.description = data.description;
    this.category = data.category;
    this.registered = data.registered;
    this.starting = data.starting;
    this.ending = data.ending;
    this.duration = data.duration;
    this.rating = data.rating;
    this.videos = data.videos;
    this.authorId = data.authorId;
    this.completed = data.completed;
  }
}
