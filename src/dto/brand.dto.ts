import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class CreateBrandDTO {
  @ApiProperty({ example: 'Gucci' })
  @IsString()
  name: string;
}

export class UpdateBrandDto extends CreateBrandDTO {}
