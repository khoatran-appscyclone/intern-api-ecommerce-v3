import { Injectable } from '@nestjs/common';
import { CreateOrderDto, UpdateOrderDto } from 'src/dto/order.dto';
import { PrismaService } from './prisma.service';

@Injectable()
export class OrderService {
  constructor(private prismaService: PrismaService) {}

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

  update(id: number, updateOrderDto: UpdateOrderDto) {
    return this.prismaService.order.update({
      where: { id },
      data: updateOrderDto,
    });
  }

  remove(id: number) {
    return this.prismaService.order.delete({ where: { id } });
  }
}
