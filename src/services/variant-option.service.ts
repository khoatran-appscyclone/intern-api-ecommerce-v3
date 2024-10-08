import { Injectable } from '@nestjs/common';

import { PrismaService } from './prisma.service';
import { CreateSizeDto, CreateColorDto } from 'src/dto/variant-option.dto';

@Injectable()
export class VariantOptionService {
  constructor(private prismaService: PrismaService) {}

  async createSize(createSizeDto: CreateSizeDto) {
    return this.prismaService.size.create({ data: createSizeDto });
  }

  async createColor(createColorDto: CreateColorDto) {
    return this.prismaService.color.create({ data: createColorDto });
  }

  async findAll() {
    const [size, color] = await Promise.all([
      this.prismaService.size.findMany(),
      this.prismaService.color.findMany({}),
    ]);

    return { size, color };
  }
}
