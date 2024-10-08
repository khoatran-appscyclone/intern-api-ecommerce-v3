import { Injectable } from '@nestjs/common';
import { CreateVoucherDto, UpdateVoucherDto } from 'src/dto/voucher.dto';
import { PrismaService } from './prisma.service';

@Injectable()
export class VoucherService {
  constructor(private prismaService: PrismaService) {}
  create(createVoucherDto: CreateVoucherDto) {
    return this.prismaService.voucher.create({ data: createVoucherDto });
  }

  findAll() {
    return this.prismaService.voucher.findMany();
  }

  findOne(id: number) {
    return this.prismaService.voucher.findFirst({ where: { id } });
  }

  update(id: number, updateVoucherDto: UpdateVoucherDto) {
    return this.prismaService.voucher.update({
      where: { id },
      data: updateVoucherDto,
    });
  }

  remove(id: number) {
    return this.prismaService.voucher.delete({ where: { id } });
  }

  async usage(id: number) {
    return await this.prismaService.voucher.update({
      where: { id },
      data: { usageLimit: { decrement: 1 } },
    });
  }
}
