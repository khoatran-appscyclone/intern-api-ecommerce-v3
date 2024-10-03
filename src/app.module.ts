import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { StaffModule } from './staff/staff.module';
import { CustomerModule } from './customer/customer.module';
import { CollectionModule } from './collection/collection.module';
import { CategoryModule } from './category/category.module';
import { VendorModule } from './vendor/vendor.module';
import { VoucherModule } from './voucher/voucher.module';
import { OrderModule } from './order/order.module';
import { DiscountCampaignModule } from './discount-campaign/discount-campaign.module';
import { VariantOptionsModule } from './variant-options/variant-options.module';
import { ProductModule } from './product/product.module';
import { InventoryModule } from './inventory/inventory.module';

@Module({
  imports: [
    StaffModule,
    CustomerModule,
    CollectionModule,
    CategoryModule,
    VendorModule,
    VoucherModule,
    OrderModule,
    DiscountCampaignModule,
    VariantOptionsModule,
    ProductModule,
    InventoryModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
