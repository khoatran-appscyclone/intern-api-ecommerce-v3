import { Injectable } from '@nestjs/common';
import { CreateCategoryDTO, UpdateCategoryDto } from 'src/dto/category.dto';
import { PrismaService } from './prisma.service';

@Injectable()
export class CategoryService {
  constructor(private prismaService: PrismaService) {}
  create(createCategoryDto: CreateCategoryDTO) {
    return this.prismaService.category.create({ data: createCategoryDto });
  }

  findAll() {
    return this.prismaService.category.findMany();
  }

  findOne(id: number) {
    return this.prismaService.category.findFirst({ where: { id } });
  }

  update(id: number, updateCategoryDto: UpdateCategoryDto) {
    return this.prismaService.category.update({
      where: { id },
      data: updateCategoryDto,
    });
  }

  remove(id: number) {
    return this.prismaService.category.delete({ where: { id } });
  }
}
