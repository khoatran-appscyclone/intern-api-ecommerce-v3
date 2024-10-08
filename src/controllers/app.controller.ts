import { Controller } from '@nestjs/common';
import { AppService } from 'src/services/app.service';
// import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  // @Get()
  // getHello(): string {
  //   return this.appService.getHello();
  // }
}
