import { Injectable } from '@nestjs/common';
import { CreateBrandDTO, UpdateBrandDto } from 'src/dto/brand.dto';
import { PrismaService } from './prisma.service';

@Injectable()
export class BrandService {
  constructor(private prismaService: PrismaService) {}
  create(createBrandDto: CreateBrandDTO) {
    return this.prismaService.brand.create({ data: createBrandDto });
  }

  findAll() {
    return this.prismaService.brand.findMany();
  }

  findOne(id: number) {
    return this.prismaService.brand.findFirst({ where: { id } });
  }

  update(id: number, updateBrandDto: UpdateBrandDto) {
    return this.prismaService.brand.update({
      where: { id },
      data: updateBrandDto,
    });
  }

  remove(id: number) {
    return this.prismaService.brand.delete({ where: { id } });
  }
}
