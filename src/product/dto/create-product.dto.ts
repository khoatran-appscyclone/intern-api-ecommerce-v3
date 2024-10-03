import { ApiProperty } from '@nestjs/swagger';
import {
  IsString,
  IsPositive,
  IsOptional,
  IsArray,
  ValidateNested,
} from 'class-validator';
import { Type } from 'class-transformer';
export class VariantDto {
  @ApiProperty({
    description: 'The price of the variant',
    example: 199.99,
  })
  @IsPositive()
  price: number;

  @ApiProperty({
    description: 'The inventory count of the variant',
    example: 100,
  })
  @IsPositive()
  inventory: number;

  @ApiProperty({
    description: 'The ID of the size associated with the variant',
    example: 1,
  })
  @IsPositive()
  sizeId: number;

  @ApiProperty({
    description: 'The ID of the color associated with the variant',
    example: 1,
  })
  @IsPositive()
  colorId: number;
}
export class CreateProductDto {
  @ApiProperty({
    description: 'The name of the product',
    example: 'Nike Air Max 2021',
  })
  @IsString()
  name: string;

  @ApiProperty({
    description: 'The price of the product',
    example: 199.99,
  })
  @IsPositive()
  price: number;

  @ApiProperty({
    description: 'A brief description of the product',
    example: 'A comfortable and stylish pair of sneakers.',
    required: false,
  })
  @IsOptional()
  @IsString()
  description?: string;

  @ApiProperty({
    description: 'The thumbnail image URL for the product',
    example: 'https://example.com/images/product-thumbnail.jpg',
    required: false,
  })
  @IsOptional()
  @IsString()
  thumbnail?: string;

  @ApiProperty({
    description: 'Array of image URLs for the product',
    example: [
      'https://example.com/images/product1.jpg',
      'https://example.com/images/product2.jpg',
    ],
    required: false,
    type: [String],
  })
  @IsOptional()
  @IsArray()
  @IsString({ each: true })
  images?: string[];

  @ApiProperty({
    description: 'The ID of the vendor associated with the product',
    example: 1,
  })
  @IsPositive()
  vendorId: number;

  @ApiProperty({
    description: 'The ID of the category associated with the product',
    example: 2,
  })
  @IsPositive()
  categoryId: number;

  @ApiProperty({
    description: 'Array of variants for the product',
    type: [VariantDto],
    example: [
      {
        price: 199.99,
        inventory: 100,
        sizeId: 1,
        colorId: 1,
      },
    ],
  })
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => VariantDto)
  variants: VariantDto[];
}
