import { IsString, IsJSON, IsUrl } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateCollectionDto {
  @ApiProperty({
    description: 'The name of the collection',
    example: 'Summer Collection',
  })
  @IsString()
  name: string;

  @ApiProperty({
    description: 'A brief description of the collection',
    example: 'A collection featuring our best summer products.',
  })
  @IsString()
  description: string;

  @ApiProperty({
    description: 'The thumbnail URL for the collection',
    example: 'https://example.com/images/collection-thumbnail.jpg',
  })
  @IsUrl()
  thumbnail: string;

  @ApiProperty({
    description: 'List of product IDs associated with this collection',
    example: '[1, 2, 3]',
  })
  @IsJSON()
  productIds: number[];
}
