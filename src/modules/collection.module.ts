import { Module } from '@nestjs/common';
import { CollectionController } from '../controllers/collection.controller';
import { CollectionService } from 'src/services/collection.service';
import { PrismaService } from 'src/services/prisma.service';

@Module({
  controllers: [CollectionController],
  providers: [CollectionService, PrismaService],
})
export class CollectionModule {}
