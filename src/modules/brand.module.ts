import { Module } from '@nestjs/common';
import { BrandController } from '../controllers/brand.controller';
import { BrandService } from 'src/services/brand.service';
import { PrismaService } from 'src/services/prisma.service';

@Module({
  controllers: [BrandController],
  providers: [BrandService, PrismaService],
})
export class BrandModule {}
