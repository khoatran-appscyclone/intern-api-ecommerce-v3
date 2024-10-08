import { Module } from '@nestjs/common';
import { UploadController } from '../controllers/upload.controller';
import { ConfigService } from '@nestjs/config';

@Module({
  controllers: [UploadController],
  providers: [ConfigService],
})
export class UploadModule {}
