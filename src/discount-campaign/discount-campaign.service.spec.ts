import { Test, TestingModule } from '@nestjs/testing';
import { DiscountCampaignService } from './discount-campaign.service';

describe('DiscountCampaignService', () => {
  let service: DiscountCampaignService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DiscountCampaignService],
    }).compile();

    service = module.get<DiscountCampaignService>(DiscountCampaignService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
