import { Injectable } from '@nestjs/common';
import { CreateCustomerDto, UpdateCustomerDto } from 'src/dto/customer.dto';
import { PrismaService } from './prisma.service';

@Injectable()
export class CustomerService {
  constructor(private prismaService: PrismaService) {}
  create(createCustomerDto: CreateCustomerDto) {
    return this.prismaService.customer.create({ data: createCustomerDto });
  }

  findAll() {
    return this.prismaService.customer.findMany();
  }

  findOne(id: number) {
    return this.prismaService.customer.findFirst({ where: { id } });
  }

  update(id: number, updateCustomerDto: UpdateCustomerDto) {
    return this.prismaService.customer.update({
      where: { id },
      data: updateCustomerDto,
    });
  }

  remove(id: number) {
    return this.prismaService.customer.delete({ where: { id } });
  }
}
