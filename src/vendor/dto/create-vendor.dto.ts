import { IsString, IsUrl } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateVendorDto {
  @ApiProperty({
    description: 'The name of the vendor',
    example: 'Acme Corp',
  })
  @IsString()
  name: string;

  @ApiProperty({
    description: 'A brief description of the vendor',
    example: 'Acme Corp is a leading provider of widgets.',
  })
  @IsString()
  description: string;

  @ApiProperty({
    description: 'The thumbnail URL for the vendor',
    example: 'https://example.com/images/vendor-thumbnail.jpg',
  })
  @IsUrl()
  thumbnail: string;
}
