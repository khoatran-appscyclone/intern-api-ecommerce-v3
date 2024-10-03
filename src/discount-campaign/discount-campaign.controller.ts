import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { DiscountCampaignService } from './discount-campaign.service';
import { CreateDiscountCampaignDto } from './dto/create-discount-campaign.dto';
import { UpdateDiscountCampaignDto } from './dto/update-discount-campaign.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Discount Campaign')
@Controller('discount-campaign')
export class DiscountCampaignController {
  constructor(private readonly discountCampaignService: DiscountCampaignService) {}

  @Post()
  create(@Body() createDiscountCampaignDto: CreateDiscountCampaignDto) {
    return this.discountCampaignService.create(createDiscountCampaignDto);
  }

  @Get()
  findAll() {
    return this.discountCampaignService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.discountCampaignService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateDiscountCampaignDto: UpdateDiscountCampaignDto) {
    return this.discountCampaignService.update(+id, updateDiscountCampaignDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.discountCampaignService.remove(+id);
  }
}
