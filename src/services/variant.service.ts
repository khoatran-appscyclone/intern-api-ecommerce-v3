import { Injectable } from '@nestjs/common';
import { UpdateVariantDto } from 'src/dto/variant.dto';
import { PrismaService } from './prisma.service';

@Injectable()
export class VariantService {
  constructor(private prismaService: PrismaService) {}
  findAll() {
    return this.prismaService.variant.findMany();
  }

  findOne(id: number) {
    return this.prismaService.variant.findFirst({ where: { id } });
  }

  update(id: number, updateVariantDto: UpdateVariantDto) {
    return this.prismaService.variant.update({
      where: { id },
      data: updateVariantDto,
    });
  }

  remove(id: number) {
    return this.prismaService.variant.delete({ where: { id } });
  }
}
