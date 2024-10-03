import { IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateCategoryDto {
  @ApiProperty({
    description: 'The name of the category',
    example: 'Electronics',
  })
  @IsString()
  name: string;

  @ApiProperty({
    description: 'A brief description of the category',
    example:
      'A category for all electronic items including phones, laptops, and gadgets.',
  })
  @IsString()
  description: string;

  @ApiProperty({
    description: 'The thumbnail URL for the category',
    example: 'https://example.com/images/category-thumbnail.jpg',
  })
  @IsString()
  thumbnail: string;
}
