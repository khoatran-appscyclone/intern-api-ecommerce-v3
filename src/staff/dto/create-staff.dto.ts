import { IsString, IsEmail, MinLength } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateStaffDto {
  @ApiProperty({
    description: 'The username of the staff member',
    example: 'jane_doe',
  })
  @IsString()
  username: string;

  @ApiProperty({
    description: 'The email address of the staff member',
    example: 'jane.doe@example.com',
  })
  @IsEmail()
  email: string;

  @ApiProperty({
    description: 'The password for the staff member, minimum 8 characters',
    example: 'securePassword123',
  })
  @IsString()
  @MinLength(8)
  password: string;
}
