import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class CreateBrandDTO {
  @ApiProperty()
  @IsString()
  name: string;
}

export class UpdateBrandDto extends CreateBrandDTO {}
