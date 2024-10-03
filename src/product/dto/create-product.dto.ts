import {
  IsArray,
  IsOptional,
  IsPositive,
  IsString,
  ValidateNested,
} from 'class-validator';
import { Type } from 'class-transformer';

export class CreateProductDto {
  @IsString()
  name: string;

  @IsPositive()
  price: number;

  @IsOptional()
  description?: string;

  @IsOptional()
  thumbnail?: string;

  @IsOptional()
  @IsArray()
  @IsString({ each: true })
  images?: string[];

  @IsPositive()
  vendorId: number;

  @IsPositive()
  categoryId: number;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => VariantDto)
  variants: VariantDto[];
}

export class VariantDto {
  @IsPositive()
  price: number;

  @IsPositive()
  inventory: number;

  @IsPositive()
  sizeId: number;

  @IsPositive()
  colorId: number;
}
