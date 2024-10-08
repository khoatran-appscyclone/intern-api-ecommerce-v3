import { Module } from '@nestjs/common';
import { ProductController } from '../controllers/product.controller';
import { PrismaService } from 'src/services/prisma.service';
import { ProductService } from 'src/services/product.service';

@Module({
  controllers: [ProductController],
  providers: [ProductService, PrismaService],
})
export class ProductModule {}
