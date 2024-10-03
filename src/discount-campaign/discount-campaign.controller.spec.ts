import { Test, TestingModule } from '@nestjs/testing';
import { DiscountCampaignController } from './discount-campaign.controller';
import { DiscountCampaignService } from './discount-campaign.service';

describe('DiscountCampaignController', () => {
  let controller: DiscountCampaignController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DiscountCampaignController],
      providers: [DiscountCampaignService],
    }).compile();

    controller = module.get<DiscountCampaignController>(DiscountCampaignController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
