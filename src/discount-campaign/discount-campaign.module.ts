import { Module } from '@nestjs/common';
import { DiscountCampaignService } from './discount-campaign.service';
import { DiscountCampaignController } from './discount-campaign.controller';

@Module({
  controllers: [DiscountCampaignController],
  providers: [DiscountCampaignService],
})
export class DiscountCampaignModule {}
