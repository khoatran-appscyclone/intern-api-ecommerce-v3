import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import { AppService } from '../services/app.service';
import configuration from '../shared/config/configuration';
import { AppController } from 'src/controllers/app.controller';

@Module({
  imports: [
    ConfigModule.forRoot({ load: [configuration] }),
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'images'),
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
