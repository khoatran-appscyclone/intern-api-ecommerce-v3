import {
  IsInt,
  IsString,
  IsOptional,
  IsNumber,
  ArrayNotEmpty,
  IsUrl,
  IsArray,
  MaxLength,
  IsPositive,
  ValidateNested,
  ArrayMinSize,
} from 'class-validator';
import { ApiProperty, ApiPropertyOptional, OmitType } from '@nestjs/swagger';
import { CreateVariantDto } from './variant.dto';
import { Type } from 'class-transformer';

export class CreateProductDto {
  @ApiProperty({
    description: 'Name of the product',
    example: 'Summer T-Shirt',
  })
  @IsString()
  name: string;

  @ApiPropertyOptional({
    description: 'Optional description of the product',
    example: 'A comfortable and stylish summer t-shirt.',
  })
  @IsOptional()
  @IsString()
  @MaxLength(500)
  description?: string;

  @ApiProperty({
    description: 'Price of the product',
    example: 29.99,
  })
  @IsNumber()
  @IsPositive()
  price: number;

  @ApiProperty({ type: () => [CreateVariantDto] })
  @IsArray()
  @ValidateNested({ each: true })
  @ArrayMinSize(1)
  @Type(() => CreateVariantDto)
  variants: CreateVariantDto[];

  @ApiProperty({
    description: 'ID of the category to which the product belongs',
    example: 1,
  })
  @IsInt()
  categoryId: number;

  @ApiProperty({
    description: 'ID of the brand of the product',
    example: 1,
  })
  @IsInt()
  brandId: number;

  @ApiPropertyOptional({
    description: 'Optional thumbnail URL for the product',
    example: 'https://example.com/images/thumbnail.jpg',
  })
  @IsOptional()
  @IsString()
  @IsUrl()
  thumbnail?: string;

  @ApiProperty({
    description: 'Array of image URLs',
    example: [
      'https://example.com/image1.jpg',
      'https://example.com/image2.jpg',
    ],
  })
  @IsArray()
  @IsUrl({}, { each: true }) // Validate that each item in the array is a valid URL
  images: string[];
}

export class UpdateProductDto extends OmitType(CreateProductDto, [
  'variants',
]) {}
