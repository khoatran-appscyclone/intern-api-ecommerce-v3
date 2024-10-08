import { IsInt, IsOptional, IsString, Min, Max } from 'class-validator';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class CreateReviewDto {
  @ApiProperty({
    description: 'Rating value (1-5)',
    example: 4,
  })
  @IsInt()
  @Min(1)
  @Max(5)
  rating: number;

  @ApiPropertyOptional({
    description: 'Optional comment about the product',
    example: 'Great product, very satisfied!',
  })
  @IsOptional()
  @IsString()
  comment?: string;

  @ApiProperty({
    description: 'ID of the customer who wrote the review',
    example: 1,
  })
  @IsInt()
  customerId: number;

  @ApiProperty({
    description: 'ID of the product being reviewed',
    example: 101,
  })
  @IsInt()
  productId: number;
}

export class UpdateReviewDto extends CreateReviewDto {}
