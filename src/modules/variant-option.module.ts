import { Module } from '@nestjs/common';
import { VariantOptionController } from '../controllers/variant-option.controller';
import { VariantOptionService } from 'src/services/variant-option.service';
import { PrismaService } from 'src/services/prisma.service';

@Module({
  controllers: [VariantOptionController],
  providers: [VariantOptionService, PrismaService],
})
export class VariantOptionModule {}
