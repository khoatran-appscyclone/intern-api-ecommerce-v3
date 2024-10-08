import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import { AppService } from '../services/app.service';
import configuration from '../shared/config/configuration';
import { AppController } from 'src/controllers/app.controller';
import { BrandModule } from './brand.module';
import { CategoryModule } from './category.module';
import { CustomerModule } from './customer.module';
import { EmployeeModule } from './employee.module';
import { CollectionModule } from './collection.module';
import { OrderModule } from './order.module';
import { ReviewModule } from './review.module';
import { ProductModule } from './product.module';
import { VariantOptionModule } from './variant-option.module';
import { ScheduleModule } from '@nestjs/schedule';
import { OrderCronService } from 'src/cron/order.cron';
import { PrismaService } from 'src/services/prisma.service';
import { VariantModule } from './variant.module';

@Module({
  imports: [
    ConfigModule.forRoot({ load: [configuration] }),
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'images'),
    }),
    ScheduleModule.forRoot(),
    BrandModule,
    CategoryModule,
    CustomerModule,
    EmployeeModule,
    CollectionModule,
    OrderModule,
    ReviewModule,
    ProductModule,
    VariantOptionModule,
    VariantModule,
  ],
  controllers: [AppController],
  providers: [AppService, OrderCronService, PrismaService],
})
export class AppModule {}
