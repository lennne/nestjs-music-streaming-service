import {
  IsArray,
  IsDateString,
  IsMilitaryTime,
  IsNotEmpty,
  IsString,
} from 'class-validator';

export class CreateSongDto {
  @IsNotEmpty()
  @IsString()
  readonly title!: string;

  @IsNotEmpty()
  @IsArray()
  @IsString({ each: true }) // Every array element must explicitly match a string parameter
  readonly artists!: string[];

  @IsNotEmpty()
  @IsDateString() // Validates ISO 8601 date string structure (YYYY-MM-DD)
  readonly releaseDate!: string;

  @IsNotEmpty()
  @IsMilitaryTime() // Enforces a strict HH:MM duration layout
  readonly duration!: string;
}
