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
import { UploadModule } from './upload/upload.module';
import { ConfigModule } from '@nestjs/config';
import configuration from './shared/config/configuration';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';

@Module({
  imports: [
    ConfigModule.forRoot({ load: [configuration] }),
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'images'), // <-- path to the static files
    }),
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
    UploadModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
