import {
  IsEnum,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsPositive,
} from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export enum OrderStatus {
  PENDING = 'PENDING',
  PROCESSING = 'PROCESSING',
  SHIPPED = 'SHIPPED',
  DELIVERED = 'DELIVERED',
  CANCELLED = 'CANCELLED',
}

export class CreateOrderDto {
  @ApiProperty({ description: 'Total amount for the order', example: 99.99 })
  @IsNumber()
  @IsPositive()
  total: number;

  @ApiProperty({
    description: 'Order status',
    enum: OrderStatus,
    example: OrderStatus.PENDING,
  })
  @IsEnum(OrderStatus)
  status: OrderStatus;

  @ApiProperty({ description: 'Customer ID', example: 1 })
  @IsNotEmpty()
  customerId: number;

  @ApiProperty({ description: 'Address ID', example: 2, required: false })
  @IsOptional()
  addressId?: number;

  @ApiProperty({ description: 'Voucher ID', example: 3, required: false })
  @IsOptional()
  voucherId?: number;
}

export class UpdateOrderDto extends CreateOrderDto {}

export class CreateOrderItemDto {
  @ApiProperty({
    description: 'Quantity of the item',
    example: 1,
  })
  @IsNumber()
  quantity: number;

  @ApiProperty({
    description: 'Price of the item',
    example: 100.5,
  })
  @IsNumber()
  price: number;

  @ApiProperty({
    description: 'ID of the variant for this order item',
    example: 1,
  })
  @IsNumber()
  variantId: number;
}
