import { Module } from '@nestjs/common';

import { VariantService } from 'src/services/variant.service';
import { PrismaService } from 'src/services/prisma.service';
import { VariantController } from 'src/controllers/variant.controller';

@Module({
  controllers: [VariantController],
  providers: [VariantService, PrismaService],
})
export class VariantModule {}
