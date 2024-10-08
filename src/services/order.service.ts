import { Injectable } from '@nestjs/common';
import { CreateOrderDto, OrderStatus, UpdateOrderDto } from 'src/dto/order.dto';
import { PrismaService } from './prisma.service';
import { VoucherService } from './voucher.service';

@Injectable()
export class OrderService {
  constructor(
    private prismaService: PrismaService,
    private voucherService: VoucherService,
  ) {}

  createOrderNumber(customerId: number) {
    return `${customerId}_${new Date().valueOf()}`;
  }

  create(createOrderDto: CreateOrderDto) {
    return this.prismaService.order.create({
      data: {
        ...createOrderDto,
        orderNumber: this.createOrderNumber(createOrderDto.customerId),
      },
    });
  }

  findAll() {
    return this.prismaService.order.findMany();
  }

  findOne(id: number) {
    return this.prismaService.order.findFirst({ where: { id } });
  }

  async update(id: number, updateOrderDto: UpdateOrderDto) {
    const order = await this.prismaService.order.update({
      where: { id },
      data: updateOrderDto,
      include: {
        orderItems: true,
      },
    });

    if (updateOrderDto.status === OrderStatus.DELIVERED) {
      if (order.voucherId) {
        await this.prismaService.voucher.update({
          where: { id: order.voucherId },
          data: { usageLimit: { decrement: 1 } },
        });
      }

      const tasks = [];
      order.orderItems.forEach((item) => {
        tasks.push(
          this.prismaService.variant.update({
            where: { id: item.id },
            data: { stock: { decrement: item.quantity } },
          }),
        );
      });

      await Promise.all(tasks);
    }

    return order;
  }

  remove(id: number) {
    return this.prismaService.order.delete({ where: { id } });
  }
}
