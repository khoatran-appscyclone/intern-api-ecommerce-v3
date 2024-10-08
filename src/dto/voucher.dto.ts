import {
  IsString,
  IsOptional,
  IsEnum,
  IsNumber,
  IsInt,
  IsBoolean,
  IsDate,
  Min,
  MaxLength,
  IsPositive,
} from 'class-validator';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { Type } from 'class-transformer';

enum DiscountType {
  PERCENTAGE = 'PERCENTAGE',
  FIXED = 'FIXED',
}

export class CreateVoucherDto {
  @ApiProperty({
    description: 'Unique code for the voucher',
    example: 'SAVE10',
  })
  @IsString()
  @MaxLength(50)
  code: string;

  @ApiPropertyOptional({
    description: 'Optional description of the voucher',
    example: 'Save 10% on your next order',
  })
  @IsOptional()
  @IsString()
  @MaxLength(255)
  description?: string;

  @ApiProperty({
    description: 'Type of discount (percentage or fixed amount)',
    enum: DiscountType,
    example: 'percentage',
  })
  @IsEnum(DiscountType)
  discountType: DiscountType;

  @ApiProperty({
    description: 'Discount value: percentage or fixed amount',
    example: 10.0,
  })
  @IsNumber()
  @IsPositive()
  discountValue: number;

  @ApiPropertyOptional({
    description: 'Minimum order value required to apply the voucher',
    example: 50.0,
  })
  @IsOptional()
  @IsNumber()
  @IsPositive()
  minOrderValue?: number;

  @ApiPropertyOptional({
    description: 'Maximum number of times the voucher can be used',
    example: 100,
  })
  @IsOptional()
  @IsInt()
  @Min(1)
  usageLimit?: number;

  @ApiProperty({
    description: 'Current usage count for the voucher',
    example: 10,
  })
  @IsInt()
  @Min(0)
  usageCount: number;

  @ApiPropertyOptional({
    description: 'Expiration date of the voucher',
    example: '2024-12-31T23:59:59.000Z',
  })
  @IsOptional()
  @IsDate()
  @Type(() => Date)
  expiresAt?: Date;

  @ApiProperty({
    description: 'Indicates if the voucher is currently active',
    example: true,
  })
  @IsBoolean()
  isActive: boolean;
}

export class UpdateVoucherDto extends CreateVoucherDto {}
