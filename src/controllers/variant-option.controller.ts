import { Body, Controller, Get, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { CreateColorDto, CreateSizeDto } from 'src/dto/variant-option.dto';
import { VariantOptionService } from 'src/services/variant-option.service';

@ApiTags('variant-option')
@Controller('variant-option')
export class VariantOptionController {
  constructor(private readonly variantOptionService: VariantOptionService) {}

  @Post('size')
  createSize(@Body() createSizeDto: CreateSizeDto) {
    return this.variantOptionService.createSize(createSizeDto);
  }

  @Post('color')
  createColor(@Body() createColorDto: CreateColorDto) {
    return this.variantOptionService.createColor(createColorDto);
  }

  @Get()
  findAll() {
    return this.variantOptionService.findAll();
  }
}
