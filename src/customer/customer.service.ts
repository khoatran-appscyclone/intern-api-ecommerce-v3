import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateCustomerDto } from './dto/create-customer.dto';
import { UpdateCustomerDto } from './dto/update-customer.dto';
import { comparePassword, hashPassword } from 'src/utils/hass-password';

@Injectable()
export class CustomerService {
  constructor(private prisma: PrismaService) {}

  async create(createCustomerDto: CreateCustomerDto) {
    const hashPass = await hashPassword(createCustomerDto.password);
    return this.prisma.customer.create({
      data: { ...createCustomerDto, password: hashPass },
    });
  }

  findAll() {
    return this.prisma.customer.findMany();
  }

  findOne(id: number) {
    return this.prisma.customer.findUnique({
      where: { id },
    });
  }

  update(id: number, updateCustomerDto: UpdateCustomerDto) {
    return this.prisma.customer.update({
      where: { id },
      data: updateCustomerDto,
    });
  }

  remove(id: number) {
    return this.prisma.customer.update({
      where: { id },
      data: { active: false },
    });
  }

  async auth(username: string, password: string) {
    const customer = await this.prisma.customer.findFirstOrThrow({
      where: { username, active: true },
    });

    const isValidPassword = comparePassword(password, customer.password);

    if (!isValidPassword) {
      throw new NotFoundException();
    }

    return customer;
  }
}
