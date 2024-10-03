import { Injectable } from '@nestjs/common';
import { CreateDiscountCampaignDto } from './dto/create-discount-campaign.dto';
import { UpdateDiscountCampaignDto } from './dto/update-discount-campaign.dto';

@Injectable()
export class DiscountCampaignService {
  create(createDiscountCampaignDto: CreateDiscountCampaignDto) {
    return 'This action adds a new discountCampaign';
  }

  findAll() {
    return `This action returns all discountCampaign`;
  }

  findOne(id: number) {
    return `This action returns a #${id} discountCampaign`;
  }

  update(id: number, updateDiscountCampaignDto: UpdateDiscountCampaignDto) {
    return `This action updates a #${id} discountCampaign`;
  }

  remove(id: number) {
    return `This action removes a #${id} discountCampaign`;
  }
}
