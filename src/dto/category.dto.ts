import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class CreateCategoryDTO {
  @ApiProperty({ example: 'Nike' })
  @IsString()
  name: string;
}

export class UpdateCategoryDto extends CreateCategoryDTO {}
