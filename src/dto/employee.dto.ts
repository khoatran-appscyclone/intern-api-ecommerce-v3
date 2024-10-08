import {
  IsString,
  IsEmail,
  IsEnum,
  IsBoolean,
  MaxLength,
} from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

enum Role {
  ADMIN = 'ADMIN',
  EMPLOYEE = 'EMPLOYEE',
}

export class CreateEmployeeDto {
  @ApiProperty({
    description: 'First name of the employee',
    example: 'John',
  })
  @IsString()
  @MaxLength(50)
  firstName: string;

  @ApiProperty({
    description: 'Last name of the employee',
    example: 'Doe',
  })
  @IsString()
  @MaxLength(50)
  lastName: string;

  @ApiProperty({
    description: 'Email address of the employee',
    example: 'john.doe@example.com',
  })
  @IsEmail()
  @MaxLength(100)
  email: string;

  @ApiProperty({
    description: 'Password for employee login',
    example: 'strongpassword123',
  })
  @IsString()
  @MaxLength(100)
  password: string;

  @ApiProperty({
    description: 'Role of the employee (ADMIN or EMPLOYEE)',
    enum: Role,
    example: 'EMPLOYEE',
  })
  @IsEnum(Role)
  role: Role;

  @ApiProperty({
    description: 'Whether the employee account is active',
    example: true,
  })
  @IsBoolean()
  isActive: boolean;
}

export class UpdateEmployeeDto extends CreateEmployeeDto {}
