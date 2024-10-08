import {
  IsString,
  IsNumber,
  IsInt,
  IsOptional,
  IsPositive,
  IsUrl,
} from 'class-validator';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class CreateVariantDto {
  @ApiProperty({
    description: 'Price of the variant',
    example: 19.99,
  })
  @IsNumber()
  @IsPositive()
  price: number;

  @ApiProperty({
    description: 'Stock quantity of the variant',
    example: 50,
  })
  @IsInt()
  @IsPositive()
  stock: number;

  @ApiProperty({
    description: 'ID of the associated color',
    example: 1,
  })
  @IsInt()
  colorId: number;

  @ApiProperty({
    description: 'ID of the associated size',
    example: 1,
  })
  @IsInt()
  sizeId: number;

  @ApiPropertyOptional({
    description: 'Optional thumbnail URL for the variant',
    example: 'https://example.com/images/variant-thumbnail.jpg',
  })
  @IsOptional()
  @IsString()
  @IsUrl()
  thumbnail?: string;
}

export class UpdateVariantDto extends CreateVariantDto {}
