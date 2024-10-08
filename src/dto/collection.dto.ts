import { IsString, IsOptional, MaxLength } from 'class-validator';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class CreateCollectionDto {
  @ApiProperty({
    description: 'Unique name of the collection',
    example: 'Summer Collection',
  })
  @IsString()
  @MaxLength(100)
  name: string;

  @ApiPropertyOptional({
    description: 'Optional description of the collection',
    example: 'A special collection for summer clothing.',
  })
  @IsOptional()
  @IsString()
  @MaxLength(500)
  description?: string;

  @ApiProperty({
    description: 'Unique slug for the collection',
    example: 'summer-collection',
  })
  @IsString()
  @MaxLength(100)
  slug: string;

  @ApiPropertyOptional({
    description: 'Optional image URL representing the collection',
    example: 'https://example.com/images/collection.jpg',
  })
  @IsOptional()
  @IsString()
  image?: string;
}

export class UpdateCollectionDto {}
