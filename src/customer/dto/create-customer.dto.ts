import { IsString, MinLength, IsEmail } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateCustomerDto {
  @ApiProperty({
    description: 'The username of the customer',
    example: 'john_doe',
  })
  @IsString()
  username: string;

  @ApiProperty({
    description: 'The password of the customer, minimum 8 characters',
    example: 'securePassword123',
  })
  @IsString()
  @MinLength(8)
  password: string;

  @ApiProperty({
    description: 'The full name of the customer',
    example: 'John Doe',
  })
  @IsString()
  fullname: string;

  @ApiProperty({
    description: 'The email address of the customer',
    example: 'john.doe@example.com',
  })
  @IsEmail()
  email: string;
}
