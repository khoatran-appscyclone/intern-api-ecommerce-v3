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

@Module({
  imports: [
    ConfigModule.forRoot({ load: [configuration] }),
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'images'),
    }),
    BrandModule,
    CategoryModule,
    CustomerModule,
    EmployeeModule,
    CollectionModule,
    OrderModule,
    ReviewModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
