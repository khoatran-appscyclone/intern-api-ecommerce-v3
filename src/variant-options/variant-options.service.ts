import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class VariantOptionsService {
  constructor(private prisma: PrismaService) {}

  async findAll() {
    const [sizes, colors] = await Promise.all([
      this.prisma.size.findMany(),
      this.prisma.color.findMany(),
    ]);

    return { sizes, colors };
  }
}
