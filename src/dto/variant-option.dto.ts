import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class CreateColorDto {
  @ApiProperty({
    description: 'Name of color',
    example: 'Blue',
  })
  @IsString()
  name: string;

  @ApiProperty({
    description: 'Hex code of color',
    example: '#FFFFFF',
  })
  @IsString()
  hexCode: string;
}

export class CreateSizeDto {
  @ApiProperty({
    description: 'Name of size',
    example: 'M',
  })
  @IsString()
  name: string;
}
