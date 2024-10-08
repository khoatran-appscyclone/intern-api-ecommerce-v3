import { Injectable } from '@nestjs/common';
import { Cron } from '@nestjs/schedule';
import { OrderStatus } from 'src/dto/order.dto';
import { PrismaService } from 'src/services/prisma.service';

@Injectable()
export class OrderCronService {
  constructor(private readonly prismaService: PrismaService) {}
//   @Cron('*/5 * * * *')
//   async handleCron() {
//     await this.prismaService.order.updateMany({
//       where: { status: OrderStatus.SHIPPED },
//       data: { status: OrderStatus.DELIVERED },
//     });

//     await this.prismaService.order.updateMany({
//       where: { status: OrderStatus.PROCESSING },
//       data: { status: OrderStatus.SHIPPED },
//     });

//     await this.prismaService.order.updateMany({
//       where: { status: OrderStatus.PENDING },
//       data: { status: OrderStatus.PROCESSING },
//     });
//   }
}
