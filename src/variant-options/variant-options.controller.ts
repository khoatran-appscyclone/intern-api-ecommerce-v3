import { Controller, Get } from '@nestjs/common';
import { VariantOptionsService } from './variant-options.service';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Variant Options')
@Controller('variant-options')
export class VariantOptionsController {
  constructor(private readonly variantOptionsService: VariantOptionsService) {}

  @Get()
  findAll() {
    return this.variantOptionsService.findAll();
  }
}
